
/* =========================================
   1. PORTFOLIO CONTENT
========================================= */

/*
n = Wheel label
tag = Small heading
t = Main title
h = Section content
*/

const items = [

    {
        n: "About",
        tag: "Summary",
        t: "About <em>me.</em>",

        h: `
            <p>
              I’m an MCA postgraduate with knowledge of Python, Flask, SQL, MySQL, HTML, CSS, JavaScript, and Excel, along with a foundation in Linux, Computer Networks, and AWS Cloud.
              I completed a Front-End Development virtual internship at SMARTINTERNZ, 
              where I gained experience in building responsive web interfaces and wireframing. 
              Through academic projects and continuous hands-on practice, I’ve developed practical skills in web application development, database management, and SDLC practices. 
              I’m always eager to learn new technologies, improve my skills, and contribute to a software development team.
        `
    },


    {
        n: "Skills",
        tag: "Technical skills",
        t: "My <em>skills.</em>",

        h: `
            <div class="rows">

                <div>
                    <h3>Programming</h3>
                    <div class="chips">
                        <span>Python</span>
                        <span>Flask</span>
                    </div>
                </div>

                <div>
                    <h3>Database</h3>
                    <div class="chips">
                        <span>SQL</span>
                        <span>MySQL</span>
                    </div>
                </div>

                <div>
                    <h3>Front-End</h3>
                    <div class="chips">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                    </div>
                </div>

                <div>
                    <h3>Linux &amp; Cloud</h3>
                    <div class="chips">
                        <span>Ubuntu</span>
                        <span>Command Line</span>
                        <span>File Management</span>
                        <span>AWS Cloud</span>
                    </div>
                </div>

                <div>
                    <h3>Networks</h3>
                    <div class="chips">
                        <span>TCP/IP</span>
                        <span>HTTP/HTTPS</span>
                        <span>DNS</span>
                        <span>FTP</span>
                        <span>OSI Model</span>
                    </div>
                </div>

                <div>
                    <h3>Tools</h3>
                    <div class="chips">
                        <span>Git</span>
                        <span>GitHub</span>
                        <span>VS Code</span>
                    </div>
                </div>

            </div>
        `
    },


    {
        n: "Projects",
        tag: "Project experience",
        t: "My <em>projects.</em>",

        h: `
            <div class="rows">

                <div>
                    <h3>CreditExpo Management System</h3>

                    <ul>
                        <li>
                            Web-based student activity management system
                            for co-curricular activities and student records,
                            with role-based login for students and admins.
                        </li>

                        <li>
                            Certificate upload and approval workflow:
                            students submit, admins verify and allocate credits.
                        </li>

                        <li>
                            Analytics dashboard tracking participation,
                            achievements and credit progress.
                        </li>

                        <li>
                            MySQL for secure storage and retrieval of
                            activity and certificate data.
                        </li>
                    </ul>

                    <p class="stack mono">
                        Python · Flask · MySQL · HTML · CSS · JavaScript
                    </p>
                </div>


            

            </div>
        `
    },


    {
        n: "Experience",
        tag: "Internship",
        t: "My <em>experience.</em>",

        h: `
            <div class="rows">

                <div>

                    <h3>
                        Front-End Development Virtual Intern
                        <span class="mono">May – Aug 2023</span>
                    </h3>

                    <p>Smartinternz</p>

                    <ul>
                        <li>
                            Designed and built user-friendly, responsive
                            web interfaces with HTML, CSS and JavaScript,
                            consistent across devices and screen sizes.
                        </li>

                        <li>
                            Created wireframes to plan layout and user flow,
                            then built a personal portfolio from those designs.
                        </li>

                        <li>
                            Collaborated with team members to integrate
                            new features and improve user interactions.
                        </li>
                    </ul>

                </div>

            </div>
        `
    },


    {
        n: "Education",
        tag: "Qualifications",
        t: "My <em>education.</em>",

        h: `
            <div class="rows">

                <div>
                    <h3>
                        Master of Computer Applications
                        <span class="mono">2024 – 2026</span>
                    </h3>

                    <p>
                        Dr. Lankapalli Bullayya College of Post Graduation
                    </p>
                </div>


                <div>
                    <h3>
                        Bachelor of Science
                        <span class="mono">2020 – 2024</span>
                    </h3>

                    <p>
                        Dr. Lankapalli Bullayya College
                    </p>
                </div>


                 
        `
    },


    {
        n: "Contact",
        tag: "Let's connect",
        t: "Get in <em>touch.</em>",

        h: `
             

            <div class="links">

                <a class="mono link"
   href="https://mail.google.com/mail/?view=cm&fs=1&to=kallapallisai2002@gmail.com&su=Hello%20Sai"
   target="_blank" rel="noopener">
    Email ↗
</a>

  <a class="mono link"
   href="https://www.linkedin.com/in/sai-kallapalli/"
   target="_blank"
   rel="noopener noreferrer">
    LinkedIn ↗
</a>


            </div>
        `
    }

];


/* =========================================
   2. SELECT HTML ELEMENTS
========================================= */

const wheel = document.getElementById("wheel");

const body = document.getElementById("body");

const tag = document.getElementById("tag");

const num = document.getElementById("num");

const N = items.length;

const STEP = 360 / N;

let rot = 0;

let active = 0;


/* =========================================
   3. CREATE WHEEL LABELS
========================================= */

const labs = items.map((item, i) => {

    const b = document.createElement("button");

    b.className = "lab mono";

    b.textContent = item.n;

    const a = i * STEP * Math.PI / 180;

    b.style.left = 50 + 42 * Math.sin(a) + "%";

    b.style.top = 50 - 42 * Math.cos(a) + "%";

    b.addEventListener("click", () => go(i, false));

    wheel.appendChild(b);

    return b;

});


/* =========================================
   4. NAVIGATION FUNCTION
========================================= */

function go(i, spin) {

    active = i;

    const target = -i * STEP;

    const diff = (((target - rot) % 360) + 360) % 360;

    rot += diff + (spin ? 720 : 0);

    wheel.style.transform = "rotate(" + rot + "deg)";


    /* Keep labels upright */

    labs.forEach((l, k) => {

        l.style.transform =
            "translate(-50%, -50%) rotate(" + (-rot) + "deg)";

        l.classList.toggle("on", k === i);

    });


    /* Update content */

    const s = items[i];

    num.textContent = "0" + (i + 1) + " / 0" + N;

    tag.textContent = s.tag;


    /* Restart content animation */

    body.style.animation = "none";

    void body.offsetWidth;

    body.style.animation = "";


    /* Display selected section */

    body.innerHTML = "<h1>" + s.t + "</h1>" + s.h;

}


/* =========================================
   5. SPIN BUTTON
========================================= */

document.getElementById("spin").addEventListener("click", () => {

    let r;

    do {

        r = Math.floor(Math.random() * N);

    } while (r === active);

    go(r, true);

});


/* =========================================
   6. KEYBOARD NAVIGATION
========================================= */

document.addEventListener("keydown", e => {

    if (e.key === "ArrowRight") {

        go((active + 1) % N, false);

    }

    if (e.key === "ArrowLeft") {

        go((active + N - 1) % N, false);

    }

});


/* =========================================
   7. INITIAL SECTION
========================================= */

go(0, false);
