function getRecommendation() {

    let name = document.getElementById("name").value.trim();
    let department = document.getElementById("department").value;
    let interest = document.getElementById("interest").value;
    let skills = document.getElementById("skills").value.trim();
    let cgpa = document.getElementById("cgpa").value;

    if(name==="" || department==="" || interest==="" || skills==="" || cgpa===""){
        alert("Please fill all the fields.");
        return;
    }

    let career="", courses="", companies="", salary="", higher="";

    switch(interest){

        case "Artificial Intelligence":
            career="AI Engineer / Machine Learning Engineer";
            courses="Python, Machine Learning, Deep Learning";
            companies="Google, Microsoft, NVIDIA";
            salary="₹6 - ₹20 LPA";
            higher="M.Tech in AI / MS in AI";
            break;

        case "Data Science":
            career="Data Scientist / Data Analyst";
            courses="Python, SQL, Power BI, Tableau";
            companies="Amazon, Infosys, Accenture";
            salary="₹5 - ₹18 LPA";
            higher="MS in Data Science";
            break;

        case "Web Development":
            career="Frontend / Full Stack Developer";
            courses="HTML, CSS, JavaScript, React";
            companies="Zoho, Freshworks, TCS";
            salary="₹4 - ₹15 LPA";
            higher="MCA / M.Tech";
            break;

        case "Cyber Security":
            career="Cyber Security Analyst";
            courses="Networking, Linux, CEH";
            companies="IBM, Cisco, Deloitte";
            salary="₹5 - ₹16 LPA";
            higher="M.Tech in Cyber Security";
            break;

        case "Cloud Computing":
            career="Cloud Engineer / DevOps Engineer";
            courses="AWS, Azure, Docker";
            companies="AWS, Oracle, IBM";
            salary="₹6 - ₹18 LPA";
            higher="Cloud Certifications";
            break;
    }

    document.getElementById("result").style.display="block";
    document.getElementById("result").innerHTML=`
        <h2>Career Recommendation</h2>

        <p><b>Student Name:</b> ${name}</p>
        <p><b>Department:</b> ${department}</p>
        <p><b>Current Skills:</b> ${skills}</p>
        <p><b>CGPA:</b> ${cgpa}</p>

        <hr><br>

        <p><b>Recommended Career:</b> ${career}</p>
        <p><b>Recommended Courses:</b> ${courses}</p>
        <p><b>Top Companies:</b> ${companies}</p>
        <p><b>Expected Salary:</b> ${salary}</p>
        <p><b>Higher Education:</b> ${higher}</p>
    `;
}

function resetForm(){

    document.getElementById("name").value="";
    document.getElementById("department").value="";
    document.getElementById("interest").value="";
    document.getElementById("skills").value="";
    document.getElementById("cgpa").value="";
    document.getElementById("result").style.display="none";

}