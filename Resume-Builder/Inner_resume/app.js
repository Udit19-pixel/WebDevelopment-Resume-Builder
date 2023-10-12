window.alert("Welcome to the resume builder");
function addNewWEField()
{
    let node=document.createElement("textarea");
    node.classList.add("form-control");
    node.classList.add("weField");
    node.setAttribute("row",3);
    node.classList.add("mt-2");
    node.setAttribute("placeholder","Enter Work experience");

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(node,weAddButtonOb)
}

function addNewAQField()
{
    let node=document.createElement("textarea");
    node.classList.add("form-control");
    node.classList.add("aqField");
    node.setAttribute("row",3);
    node.classList.add("mt-2");
    node.setAttribute("placeholder","Enter Academic Qualifications");

    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");

    aqOb.insertBefore(node,aqAddButtonOb)
}
function addNewICField()
{
    let node=document.createElement("textarea");
    node.classList.add("form-control");
    node.classList.add("icField");
    node.setAttribute("row",3);
    node.classList.add("mt-2");
    node.setAttribute("placeholder","Enter Internships/Courses");

    let icOb=document.getElementById("ic");
    let icAddButtonOb=document.getElementById("icAddButton");

    icOb.insertBefore(node,icAddButtonOb)
}
function generateResume()
{
    let nameField=document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML=nameField;

    document.getElementById("nameT2").innerHTML=nameField;
    
    document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;

    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

    document.getElementById("tT").innerHTML=document.getElementById("tField").value;
    document.getElementById("iT").innerHTML=document.getElementById("iField").value;
    document.getElementById("liT").innerHTML=document.getElementById("liField").value;

    document.getElementById("cObjectiveT").innerHTML=document.getElementById("cObjectiveField").value;

    let we=document.getElementsByClassName("weField");
    let str="";
    for (let e of we)
    {
        str=str+`<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML=str;

    let aq=document.getElementsByClassName("aqField");
    let str1="";
    for (let f of aq)
    {
        str1=str1+`<li> ${f.value} </li>`;
    }
    document.getElementById("aqT").innerHTML=str1;

    let ic=document.getElementsByClassName("icField");
    let str2="";
    for (let g of ic)
    {
        str2=str2+`<li> ${g.value} </li>`;
    }
    document.getElementById("icT").innerHTML=str2;

    let file=document.getElementById("imgField").files[0];
    let reader=new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend=function()
    {
        document.getElementById("imgT").src=reader.result;
    };

    document.getElementById("resume-form").style.display="none";
    document.getElementById("resume-template").style.display="block";
}
function printResume()
{
    document.getElementById("printButton").style.display="none";
    window.print();
}
function downloadPDFResume()
{
    let div=document.getElementById("resume-template");
    let btn=document.getElementById("downloadPDFButton");
    btn=addEventListener("click",()=>
    {
        html2pdf().from(div).save();
    });
}
function downloadWORDResume()
{
        var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
        var footer = "</body></html>";
        var html = header+document.getElementById("resume-template").innerHTML+footer;
        var blob = new Blob(['\ufeff', html],
        {
            type: 'application/msword'
        });
        var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
        filename = "file"?"file"+'.docx':'document.docx';
        var downloadLink = document.createElement("a");
        document.body.appendChild(downloadLink); 
        if (navigator.msSaveOrOpenBlob )
        {
            navigator.msSaveOrOpenBlob(blob, filename);
        }
        else
        {
            downloadLink.href = url;
            downloadLink.download = filename;
            downloadLink.click();
        }
        document.body.removeChild(downloadLink);
}