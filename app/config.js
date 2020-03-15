// var root="http://192.168.1.105:8088/api/";

function formEncode(obj) {
	var str = [];
	for(var p in obj)
	str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
	return str.join("&");
}
function GetTranDateTime () {
    now = new Date();
    year = "" + now.getFullYear();
    month = "" + (now.getMonth() + 1); if (month.length == 1) { month = "0" + month; }
    day = "" + now.getDate(); if (day.length == 1) { day = "0" + day; }
    hour = "" + now.getHours(); if (hour.length == 1) { hour = "0" + hour; }
    minute = "" + now.getMinutes(); if (minute.length == 1) { minute = "0" + minute; }
    second = "" + now.getSeconds(); if (second.length == 1) { second = "0" + second; }
    return day + month + year + hour + minute + second;
}
export const root="http://192.168.1.105:8088/api/"
export const Store={
    PAN:"",
    Token:"",
    Pass:"",
    Username:"",
    Phone:"",
    Email:""
}
export const Enums={
        RegType:{
            CardWithoutPass:"10",
            CardWithPass:"12"
        },
        EntityType:{
            PhoneNo:"Phone No",
            MeterNo:"Meter No",
            CreditCard:"Credit Card",
            CashCard:"Cash Card"
        },
        EntityGroup:{
            CashCardWithAllChannels:"1",
            CashCardWithOneChannel:"0"
        },
        PayeeId:{
            ZainTopUp:"0010010001",
            ZainBillPayment:"0010010002",
            MtnTopUp:"0010010003",
            MtnBillPayment:"0010010004",
            SudaniTopUp:"0010010005",
            SudaniBillPayment:"0010010006",
            Electricity:"0010020001",
            HigherEdu:"0010030002",        
            HigherEduArab:"0010030004",
            Customs:"0010030003",
            GovPayement:"0010050001"
        },
        AccountType:{
            Default:"00",
            Checking:"01",
            Savings:"11",
            Credit:"31",
            Bouns:"91"        
        },
        PaymentMethodId:{
            cash:1,
            cheque:2,
            electronic:3
        },
        RequestedServiceId:{
            RequestInvoice_UC_001:1,
            GetInvoiceInfo_UC_002:2,
            IssueReceipt_UC_003:3,
            QueryReceipt_UC_004:4,
            IssueReceipt_QueryReceipt_UC_005:5,
            GetInvoiceInfo_IssueReceipt_UC_006:6,
            GetInvoiceInfo_IssueReceipt_QueryRecepit_UC_007:7,
            RequestInvoice_IssueReceipt_UC_008:8,
            RequestInvoice_IssueReceipt_QueryReceipt_UC_009:9

        }

}
export function AddUsers(UserJson,done)
{
    fetch(root+'Account/Register',{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(UserJson)
    }).then((response)=>{
        console.log(response._bodyText);
        console.log(JSON.stringify(response));
        if(response.status===200)
        {
            done(true)
        }
        else
        {
            done(response._bodyText);
        }
        return response.json();
    }).catch((err)=>{
        console.log("Fetch Registration Error: "+err);
    });
}

export const TranDateTime=GetTranDateTime()

