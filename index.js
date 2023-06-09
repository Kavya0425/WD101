let userForm=document.getElementById("user-form");
const getentry=()=>{
    let entries=localStorage.getItem("user-entries");
    if(entries){entries=JSON.parse(entries);}
    else{entries=[];}
    return entries;
}

window.onload = function() {
    var date = new Date();
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    minYear = yyyy - 55; 
    maxYear = yyyy - 18; 

    var min = minYear + "-" + mm + "-" + dd;
    var max = maxYear + "-" + mm + "-" + dd;

    document.getElementById("dob").setAttribute("min", min);
    document.getElementById("dob").setAttribute("max", max);
  };


let userEntries=getentry();
const showentry=()=>{
    const entries=getentry();
    const tableEntries=entries.map((entry)=>{
        const nameCell=`<td class='border px-4 py-2'>${entry.name}</td>`;
        const emailCell=`<td class='border px-4 py-2'>${entry.email}</td>`;
        const passwordCell=`<td class='border px-4 py-2'>${entry.password}</td>`;
        const dobCell=`<td class='border px-4 py-2'>${entry.dob}</td>`;
        const acceptTermsCell=`<td class='border px-4 py-2'>${entry.acceptTermsandconditions}</td>`;
        const row=`<tr>${nameCell} ${emailCell} ${passwordCell} ${dobCell} ${acceptTermsCell}</tr>`;
        return row;
    }).join("\n");
    const table=`<table class="table-auto w-full"><tr>
    <th class="px-4 py-2">Name</th>
    <th class="px-4 py-2">Email</th>
    <th class="px-4 py-2">Password</th>
    <th class="px-4 py-2">dob</th>
    <th class="px-4 py-2">accepted terms?</th>
    </tr>${tableEntries}</table>`;
    let details=document.getElementById("user-entries");
    details.innerHTML=table;
}
const saveUserForm=(event)=>{
event.preventDefault();
const name=document.getElementById("name").value;
const email=document.getElementById("email").value;
  const password=document.getElementById("password").value;
  const dob=document.getElementById("dob").value;
  const acceptTermsandconditions=document.getElementById("acceptTerms").checked;

const entry={
name,
  email,
  password,
  dob,
  acceptTermsandconditions
};
userEntries.push(entry);
  localStorage.setItem("user-entries",JSON.stringify(userEntries));
  showentry();
}
userForm.addEventListener("submit",saveUserForm);
showentry();

