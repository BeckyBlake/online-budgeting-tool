import './Financial Literacy.css';
export default function Contact() {
    return (
        <div>
        <h1 class="heading" style={{font: "bold 40px Avant Garde, Avantgarde, Century Gothic, CenturyGothic, AppleGothic, sans-serif"}}>Financial Literacy</h1>
        <h3 style={{font: "bold 40px Avant Garde, Avantgarde, Century Gothic, CenturyGothic, AppleGothic, sans-serif"}}>Resources</h3>
        <ul class="resource-list">
            <li style={{font: "Avant Garde, Avantgarde, Century Gothic, CenturyGothic, AppleGothic, sans-serif"}}>
                <p>
                <a href='https://www.practicalmoneyskills.com/'>Practical Money Skills</a> is a program run by Visa that contains a wealth of financial literacy lesson plans for high school that teachers can draw upon for their courses.
                  </p>
            </li>
            <li>
                <p>
                    <a href='https://www.ngpf.org/'>Next Gen Personal Finance</a> is a non-profit organization that provides free financial literacy resources for teachers and students.
                </p>
            </li>
            <li>
                <p>
                    <a href='https://www.choosetosave.org/'>Choose to Save</a> is a program run by the American Savings Education Council that provides free financial literacy resources for teachers and students. 
                </p>
            </li>
            <li>
                <p>
                    <a href='https://www.incharge.org/financial-literacy/'>InCharge Debt Solutions</a> is a non-profit organization created to help companies, law firms, educational institutions, and individual clients reduce their debt and learn financial literacy.                </p>

            </li>
        </ul>
        </div>
    )
}