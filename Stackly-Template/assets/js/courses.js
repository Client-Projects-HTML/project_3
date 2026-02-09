const coursesData = {
    osha: {
        title: "OSHA 10-Hour Construction",
        badge: "Construction Industry",
        badgeClass: "bg-green-100 text-green-700",
        description: "The OSHA 10-Hour Construction course is designed for entry-level workers to recognize and prevent hazards on a construction site. This training is mandatory for workers in many states, providing essential knowledge on safety standards.",
        duration: "10 Hours",
        price: "$79.00",
        strikePrice: "$99.00",
        learnTopics: [
            "Introduction to OSHA",
            "Fall Protection",
            "Electrical Safety",
            "Struck-By Hazards",
            "PPE Selection & Use",
            "Health Hazards"
        ],
        curriculum: [
            {
                module: "Module 1: Intro to OSHA",
                details: "Worker rights, employer responsibilities, and how to file a complaint."
            },
            {
                module: "Module 2: OSHA Focus Four",
                details: "Falls, Electrocution, Struck-By, and Caught-In/Between."
            },
            {
                module: "Module 3: Personal Protective Equipment",
                details: "Selection, use, and maintenance of PPE."
            }
        ]
    },
    fire: {
        title: "Fire Safety Certification",
        badge: "Emergency Response",
        badgeClass: "bg-red-100 text-red-700",
        description: "Comprehensive training on fire prevention, suppression techniques, and emergency evacuation protocols. Essential for ensuring workplace safety and meeting regulatory fire safety standards.",
        duration: "6 Hours",
        price: "$65.00",
        strikePrice: "$85.00",
        learnTopics: [
            "Fire Chemistry & Classes",
            "Fire Extinguisher Operation",
            "Evacuation Planning",
            "Smoke Inhalation Prevention",
            "Emergency Communication",
            "Hazard Identification"
        ],
        curriculum: [
            {
                module: "Module 1: Fire Prevention Principles",
                details: "Identifying fire risks and implementing prevention strategies."
            },
            {
                module: "Module 2: Fire Suppression Systems",
                details: "Types of fire extinguishers and their correct usage."
            },
            {
                module: "Module 3: Emergency Evacuation",
                details: "Safe evacuation routes and procedures during a fire emergency."
            }
        ]
    },
    hazmat: {
        title: "HazMat Training",
        badge: "Chemical Safety",
        badgeClass: "bg-yellow-100 text-yellow-700",
        description: "Detailed training on the safe handling, storage, and disposal of hazardous materials. Includes hazard communication standards (GHS) and spill response procedures to protect workers and the environment.",
        duration: "8 Hours",
        price: "$89.00",
        strikePrice: "$110.00",
        learnTopics: [
            "Understanding GHS Labels",
            "Chemical Storage Best Practices",
            "Spill Containment Techniques",
            "Hazardous Waste Disposal",
            "PPE for Chemical Handling",
            "Reporting Procedures"
        ],
        curriculum: [
            {
                module: "Module 1: Introduction to HazMat",
                details: "Definitions, classifications, and regulatory oversight."
            },
            {
                module: "Module 2: Hazard Communication",
                details: "How to read SDS and understand chemical warning labels."
            },
            {
                module: "Module 3: Spill Prevention and Control",
                details: "Immediate response actions for chemical spills in the workplace."
            }
        ]
    },
    forklift: {
        title: "Forklift Certification",
        badge: "Material Handling",
        badgeClass: "bg-blue-100 text-blue-700",
        description: "Comprehensive forklift operator training compliant with OSHA 1910.178 standards. Covers safe operation, maintenance, and hazard avoidance for various types of industrial trucks.",
        duration: "4 Hours",
        price: "$55.00",
        strikePrice: "$75.00",
        learnTopics: [
            "Operating Instructions",
            "Truck Capacity & Stability",
            "Inspections & Maintenance",
            "Load Handling & Stacking",
            "Pedestrian Safety",
            "Refueling & Recharging"
        ],
        curriculum: [
            {
                module: "Module 1: Forklift Fundamentals",
                details: "Basic components and physics of industrial trucks."
            },
            {
                module: "Module 2: Safe Operating Procedures",
                details: "Driving techniques and maneuvering in tight spaces."
            },
            {
                module: "Module 3: OSHA Compliance",
                details: "Regulatory requirements for certification and documentation."
            }
        ]
    },
    firstaid: {
        title: "First Aid / CPR / AED",
        badge: "Life Saving",
        badgeClass: "bg-red-100 text-red-700",
        description: "Learn life-saving skills for workplace emergencies. This course provides hands-on practice in CPR, using an AED, and basic first aid for common industrial injuries.",
        duration: "6 Hours",
        price: "$49.00",
        strikePrice: "$69.00",
        learnTopics: [
            "Adult CPR Techniques",
            "AED Operation",
            "Choking Emergency Response",
            "Bleeding Control",
            "Burn Treatment",
            "Shock Management"
        ],
        curriculum: [
            {
                module: "Module 1: Assessing the Scene",
                details: "Safety first and initial victim assessment."
            },
            {
                module: "Module 2: CPR & AED Usage",
                details: "Step-by-step guide to cardiac emergency response."
            },
            {
                module: "Module 3: Basic First Aid Skills",
                details: "Treating injuries until medical professionals arrive."
            }
        ]
    },
    loto: {
        title: "Lockout / Tagout (LOTO)",
        badge: "Energy Control",
        badgeClass: "bg-orange-100 text-orange-700",
        description: "Essential training on the control of hazardous energy during service and maintenance of machines. Prevent accidental startups and ensure worker safety during equipment repair.",
        duration: "2 Hours",
        price: "$39.00",
        strikePrice: "$55.00",
        learnTopics: [
            "Energy Source Identification",
            "Lockout Devices & Tags",
            "Isolation Procedures",
            "Release of Stored Energy",
            "Verification of Isolation",
            "Removing LOTO Devices"
        ],
        curriculum: [
            {
                module: "Module 1: The LOTO Standard",
                details: "Overview of OSHA 1910.147 requirements."
            },
            {
                module: "Module 2: Types of Hazardous Energy",
                details: "Electrical, mechanical, hydraulic, and pneumatic energy."
            },
            {
                module: "Module 3: Step-by-Step LOTO Process",
                details: "The 6-step procedure for safe energy isolation."
            }
        ]
    },
    confined: {
        title: "Confined Space Entry",
        badge: "High Risk Safety",
        badgeClass: "bg-purple-100 text-purple-700",
        description: "Practices and procedures to protect employees from the hazards of entry into permit-required confined spaces. Covers atmospheric testing, entry permits, and rescue duties.",
        duration: "8 Hours",
        price: "$95.00",
        strikePrice: "$125.00",
        learnTopics: [
            "Space Classification",
            "Atmospheric Monitoring",
            "Ventilation Techniques",
            "Entry Permits & Documentation",
            "Attendant Responsibilities",
            "Emergency Rescue Prep"
        ],
        curriculum: [
            {
                module: "Module 1: Identifying Confined Spaces",
                details: "Definitions and criteria for permit-required spaces."
            },
            {
                module: "Module 2: Hazards & Controls",
                details: "Managing physical and atmospheric hazards."
            },
            {
                module: "Module 3: The Entry Team",
                details: "Roles of the entrant, attendant, and supervisor."
            }
        ]
    },
    electrical: {
        title: "Electrical Safety (NFPA 70E)",
        badge: "Technical Safety",
        badgeClass: "bg-yellow-100 text-yellow-700",
        description: "Requirements for safe work practices to protect personnel from major electrical hazards like arc flash and shock. Based on NFPA 70E standards for workplace safety.",
        duration: "4 Hours",
        price: "$75.00",
        strikePrice: "$95.00",
        learnTopics: [
            "Shock Hazard Analysis",
            "Arc Flash Boundaries",
            "Electrical PPE Selection",
            "Safety-Related Work Practices",
            "Maintenance Requirements",
            "Special Equipment Handling"
        ],
        curriculum: [
            {
                module: "Module 1: Hazards of Electricity",
                details: "Understanding shock, arc flash, and arc blast."
            },
            {
                module: "Module 2: NFPA 70E Standards",
                details: "Global standard for electrical safety in the workplace."
            },
            {
                module: "Module 3: Establishing a Safe Work Condition",
                details: "Proper grounding and de-energizing procedures."
            }
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('course');

    if (courseId && coursesData[courseId]) {
        const course = coursesData[courseId];

        // Update basic info
        if (document.getElementById('courseTitle')) document.getElementById('courseTitle').textContent = course.title;
        if (document.getElementById('courseBadge')) {
            document.getElementById('courseBadge').textContent = course.badge;
            document.getElementById('courseBadge').className = `inline-block px-3 py-1 rounded-full text-sm font-bold mb-4 ${course.badgeClass}`;
        }
        if (document.getElementById('courseDesc')) document.getElementById('courseDesc').textContent = course.description;
        if (document.getElementById('courseDuration')) document.getElementById('courseDuration').textContent = course.duration;
        if (document.getElementById('coursePrice')) document.getElementById('coursePrice').textContent = course.price;
        if (document.getElementById('courseStrikePrice')) document.getElementById('courseStrikePrice').textContent = course.strikePrice;
        document.title = `TrainComply Solutions | ${course.title}`;

        // Update Learn Topics
        const learnTopicsContainer = document.getElementById('courseLearnTopics');
        if (learnTopicsContainer) {
            learnTopicsContainer.innerHTML = course.learnTopics.map(topic => `
                <div class="flex items-center gap-3 p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
                    <i class="fas fa-check-circle text-primary-500"></i> ${topic}
                </div>
            `).join('');
        }

        // Update Curriculum
        const curriculumContainer = document.getElementById('courseCurriculum');
        if (curriculumContainer) {
            curriculumContainer.innerHTML = course.curriculum.map((item, index) => `
                <div class="border border-gray-200 dark:border-slate-700 rounded-xl overflow-hidden">
                    <button
                        class="w-full flex justify-between items-center p-4 bg-gray-50 dark:bg-slate-700/50 font-medium text-slate-900 dark:text-white text-left curriculum-toggle">
                        <span>${item.module}</span>
                        <i class="fas fa-chevron-down transition-transform duration-200"></i>
                    </button>
                    <div class="p-4 text-slate-600 dark:text-slate-400 text-sm hidden content-area">
                        ${item.details}
                    </div>
                </div>
            `).join('');

            // Add accordion logic for curriculum
            document.querySelectorAll('.curriculum-toggle').forEach(button => {
                button.addEventListener('click', () => {
                    const content = button.nextElementSibling;
                    const icon = button.querySelector('.fa-chevron-down');

                    content.classList.toggle('hidden');
                    icon.classList.toggle('rotate-180');
                });
            });
        }
    }
});
