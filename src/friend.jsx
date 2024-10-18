export default function Friend11({frnd}){
    const {name,username,email,address,phone}=frnd;
    return(
        <div className="box">
<h4>name: {name}</h4>
<h4>email: {email}</h4>
<h4>username: {username}</h4>
<h4>address: {address.street}</h4>
<h4>phone: {phone}</h4>
        </div>
    )
}