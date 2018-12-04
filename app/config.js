var root="http://192.168.1.105:8088/api/";

function formEncode(obj) {
	var str = [];
	for(var p in obj)
	str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
	return str.join("&");
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