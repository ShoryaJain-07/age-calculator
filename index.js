const iday=document.getElementById("day");
const imonth=document.getElementById("month");
const iyear=document.getElementById("year");
const output=document.getElementById("output");


// const errmsg={
//     required: "This field is required",
//     invalid: (str)=>`must be a valid ${str}`,
//     range: "must be in past",
// };


function emptydate()
{
    let i=1;
    if(iday.value=="")
    {
        document.getElementById('error_date').innerHTML='this field is required';
        i=0;
    }
    if(imonth.value=="")
    {
        document.getElementById('error_month').innerHTML='this field is required';
        i=0;
    }
    if(iyear.value=="")
    {
        document.getElementById('error_year').innerHTML='this field is required';
        i=0;
    }
    return i;    
}

function validdate()
{
    let i=1;
    if(iyear.value>new Date().getFullYear())
    {
        document.getElementById('error_year').innerHTML='must be in the past';
        i=0;
    }
    if(imonth.value>12||imonth.value<1)
    {
        document.getElementById('error_month').innerHTML='must be a valid month';
        i= 0;
    }
    if(iday.value>31||iday.value<1)
    {
        document.getElementById('error_date').innerHTML='must be a valid day';
        i= 0;
    }
    return i;
}

function check(){

    

    const dd=parseInt(iday.value);
    const mm=parseInt(imonth.value);
    const yyyy=parseInt(iyear.value);

    const d=mm+','+dd+','+yyyy;

    const dob=new Date(d);


    const emptycheck=emptydate();
    const validcheck=validdate();

    
    let today=new Date();

    if(emptycheck && validcheck)
    {
        const userage=new Date(today-dob);

        const ad=userage.getDate();
        const am=userage.getMonth();
        const ay=userage.getFullYear()-1970;

        document.getElementById("adate").innerHTML=`${ad}`;
        document.getElementById("amonth").innerHTML=`${am}`;
        document.getElementById("ayear").innerHTML=`${ay}`;
                



    }

};