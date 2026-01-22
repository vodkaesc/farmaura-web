import React from 'react';
import Section from './ui/Section';
import { Linkedin, Mail, Binary, Rocket, ShieldCheck } from 'lucide-react';

// Import team images
import keerthanImg from '../images/keerthan.jpeg';
import saheemImg from '../images/s_Mohammed_Saheem.jpeg';
import kishanImg from '../images/kishan.jpeg';
import moeizzImg from '../images/moeizz.jpeg';
import buranImg from '../images/buran.jpeg';
import tharunImg from '../images/Tharun.png';
import manasaImg from '../images/manasa_K_R.jpg';

interface TeamMember {
    name: string;
    role: string;
    responsibility: string;
    image: string;
    type: 'founder' | 'core';
    linkedin: string;
    email: string;
}

const team: TeamMember[] = [
    {
        name: "Keerthan Shetty",
        role: "Founder",
        responsibility: "AI/ML Engineer",
        image: keerthanImg,
        type: 'founder',
        linkedin: "https://www.linkedin.com/in/keerthanshetty334/",
        email: "mailto:keerthans334@gmail.com"
    },
    {
        name: "S Mohammed saheem",
        role: "Founder",
        responsibility: "Full stack development",
        image: saheemImg,
        type: 'founder',
        linkedin: "https://www.linkedin.com/in/s-mohammed-saheem-8a6100295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "mailto:saheemtab@gmail.com"
    },
    {
        name: "Kishan M Naidu",
        role: "Founder",
        responsibility: "Cross-platform App developer",
        image: kishanImg,
        type: 'founder',
        linkedin: "https://www.linkedin.com/in/kishan-m-naidu2123",
        email: "mailto:kishanmnaidu2005@gmail.com"
    },
    {
        name: "Sheik Abdul Moiezz",
        role: "Core Team",
        responsibility: "Business and Marketing Lead",
        image: moeizzImg,
        type: 'core',
        linkedin: "https://www.linkedin.com/in/shaik-abdul-moiezz-58187b300?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        email: "mailto:shaikabdulmoiezz2005@gmail.com"
    },
    {
        name: "Mirza Burhan Baig",
        role: "Core Team",
        responsibility: "Frontend development",
        image: buranImg,
        type: 'core',
        linkedin: "https://www.linkedin.com/in/mirza-burhan-baig-46a794295/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "mirzaburhan269@gmail.com"
    },
    {
        name: "Tharun H N",
        role: "Core Team",
        responsibility: "Backend developer",
        image: tharunImg,
        type: 'core',
        linkedin: "https://www.linkedin.com/in/tharunhn",
        email: "mailto:tharun30115@gmail.com"
    },
    {
        name: "Manasa KR",
        role: "Core Team",
        responsibility: "Research and Documentation",
        image: manasaImg,
        type: 'core',
        linkedin: "https://www.linkedin.com/in/manasa-k-r-8718402b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        email: "mailto:manasakr265@gmail.com"
    }
];

const Team: React.FC = () => {
    const founders = team.filter(m => m.type === 'founder');
    const coreTeam = team.filter(m => m.type === 'core');

    return (
        <Section id="team" title="Execution & Leadership" subtitle="A multi-disciplinary team driving the intersection of AI and climate-resilient agriculture." className="bg-slate-50/50">

            {/* Founders Tier - Highlighted */}
            <div className="mb-24">
                <div className="flex flex-col items-center mb-12">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
                        <Rocket size={12} />
                        Founding Partners
                    </span>
                    <div className="w-20 h-1 bg-primary/20 rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-10 lg:gap-16 max-w-6xl mx-auto">
                    {founders.map((member, idx) => (
                        <div key={idx} className="group flex flex-col items-center text-center">
                            <div className="relative w-full aspect-[4/5] mb-8 rounded-[2rem] overflow-hidden bg-white shadow-xl shadow-slate-200/50 group-hover:shadow-2xl transition-all duration-500 border-4 border-white">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                                    <div className="flex gap-4">
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl text-white flex items-center justify-center hover:bg-white/40 transition-colors"><Linkedin size={20} /></a>
                                        <a href={member.email} className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl text-white flex items-center justify-center hover:bg-white/40 transition-colors"><Mail size={20} /></a>
                                    </div>
                                </div>
                            </div>

                            <h4 className="text-2xl font-bold text-slate-800 mb-1">{member.name}</h4>
                            <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-3">{member.role}</p>
                            <div className="inline-block px-5 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 shadow-sm group-hover:border-primary/30 transition-colors">
                                {member.responsibility}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Core Team Tier */}
            <div className="relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-slate-200"></div>
                </div>
                <div className="relative flex justify-center mb-12">
                    <span className="bg-slate-50 px-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        <Binary size={14} className="text-slate-300" />
                        Specialized Engineering & Strategy
                    </span>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {coreTeam.map((member, idx) => (
                        <div key={idx} className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                            <div className="relative aspect-square mb-6 rounded-xl overflow-hidden bg-slate-50">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
                                    <div className="flex gap-3">
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/20 backdrop-blur-md rounded-lg text-white flex items-center justify-center hover:bg-white/40 transition-colors"><Linkedin size={18} /></a>
                                        <a href={member.email} className="w-9 h-9 bg-white/20 backdrop-blur-md rounded-lg text-white flex items-center justify-center hover:bg-white/40 transition-colors"><Mail size={18} /></a>
                                    </div>
                                </div>
                            </div>
                            <h4 className="text-lg font-bold text-slate-800 mb-1">{member.name}</h4>
                            <p className="text-[10px] font-bold text-slate-400 underline decoration-slate-200 underline-offset-4 uppercase tracking-widest mb-3">{member.role}</p>
                            <p className="text-xs text-slate-600 leading-relaxed font-medium line-clamp-2">
                                {member.responsibility}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Institutional Support - Agri-Themed Trust Section */}
            <div className="mt-20 px-8 py-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xs">
                    <ShieldCheck className="text-primary-light mb-4" size={32} />
                    <h5 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-2">Validated & Backed</h5>
                    <p className="text-xs text-slate-500 leading-relaxed">Incubated by leading agricultural institutions, ensuring our solutions are grounded in policy and peer-reviewed science.</p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    {/* Pusa Krishi Logo Placeholder */}
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#6b21a8]/10 rounded-full flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full bg-[#6b21a8] flex items-center justify-center text-white text-[10px] font-black">PK</div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs font-black text-slate-800 leading-none">PUSA KRISHI</span>
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">ICAR-IARI</span>
                        </div>
                    </div>

                    {/* AICTE/Ministry Placeholder */}
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-600">
                            <Rocket size={24} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs font-black text-slate-800 leading-none">Innovation Cell</span>
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Ministry of Education</span>
                        </div>
                    </div>

                    {/* Leaf Aesthetic */}
                    <div className="hidden lg:block">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z" className="fill-secondary/20" />
                            <path d="M20 30V10M10 20H30" className="stroke-primary" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Team;
