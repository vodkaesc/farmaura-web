import React, { useState } from 'react';
import Section from './ui/Section';
import { Award, ShieldCheck, Building2, FileText, ExternalLink, Sparkles, GraduationCap, BadgeCheck, CalendarDays, MapPin, Landmark } from 'lucide-react';

const Achievements: React.FC = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const milestones = [
        {
            id: 1,
            icon: Building2,
            title: 'MSME (Udyam) Registration',
            subtitle: 'Ministry of MSME, Government of India',
            description:
                'FarmAura is officially registered as a Micro Enterprise under the MSME Act, with Udyam Registration Number UDYAM-KR-03-0658128, validating our commitment to building scalable agri-tech solutions for Indian agriculture.',
            date: '10 February 2026',
            registrationId: 'UDYAM-KR-03-0658128',
            location: 'Bengaluru, Karnataka',
            tags: ['Government Registration', 'MSME', 'Micro Enterprise'],
            accentColor: 'from-emerald-500 to-teal-600',
            bgAccent: 'bg-emerald-50',
            textAccent: 'text-emerald-700',
            borderAccent: 'border-emerald-200',
            iconBg: 'bg-emerald-100',
            iconColor: 'text-emerald-600',
            buttonText: 'View Certificate',
            pdfLink: '/docs/udyam-certificate.pdf',
        },
        {
            id: 2,
            icon: GraduationCap,
            title: 'ICAR-SHITIJ 2026 Incubation',
            subtitle: 'ICAR-Indian Agricultural Research Institute (IARI)',
            description:
                'Selected for the prestigious ICAR-SHITIJ 2026 One-Month Incubation Program (Cohort-1) — a free entrepreneurship mentoring program organized by Pusa Krishi, ICAR-IARI, supported by the Indian Council of Agricultural Research.',
            date: '30 January 2026',
            registrationId: 'Cohort-1 Selection',
            location: 'ICAR-IARI, New Delhi',
            tags: ['Incubation', 'ICAR', 'IARI', 'Agri-Innovation'],
            accentColor: 'from-blue-500 to-indigo-600',
            bgAccent: 'bg-blue-50',
            textAccent: 'text-blue-700',
            borderAccent: 'border-blue-200',
            iconBg: 'bg-blue-100',
            iconColor: 'text-blue-600',
            buttonText: 'View Selection Letter',
            pdfLink: '/docs/icar-shitij-selection.pdf',
        },
    ];

    return (
        <Section
            id="milestones"
            title="Achievements & Milestones"
            subtitle="Recognized and validated by India's top agricultural and government institutions."
        >
            {/* Timeline connector for desktop */}
            <div className="relative">
                {/* Vertical timeline line - desktop only */}
                <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-200 via-blue-200 to-transparent transform -translate-x-1/2 z-0" />

                <div className="space-y-12 lg:space-y-16 relative z-10">
                    {milestones.map((milestone, idx) => (
                        <div
                            key={milestone.id}
                            className={`flex flex-col lg:flex-row items-start gap-8 lg:gap-12 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}
                            onMouseEnter={() => setHoveredCard(idx)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Timeline node - desktop only */}
                            <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 z-20">
                                <div
                                    className={`w-14 h-14 rounded-full border-4 border-white shadow-lg flex items-center justify-center transition-all duration-500 bg-gradient-to-br ${milestone.accentColor} ${hoveredCard === idx ? 'scale-125 shadow-xl' : ''
                                        }`}
                                >
                                    <milestone.icon size={22} className="text-white" strokeWidth={2} />
                                </div>
                            </div>

                            {/* Card */}
                            <div
                                className={`w-full lg:w-[calc(50%-3rem)] group transition-all duration-500 ${hoveredCard === idx ? 'transform lg:scale-[1.02]' : ''
                                    }`}
                            >
                                <div
                                    className={`relative overflow-hidden rounded-2xl border ${milestone.borderAccent} bg-white shadow-sm hover:shadow-2xl transition-all duration-500`}
                                >
                                    {/* Top gradient accent bar */}
                                    <div
                                        className={`h-1.5 w-full bg-gradient-to-r ${milestone.accentColor}`}
                                    />

                                    <div className="p-8 md:p-10">
                                        {/* Mobile icon */}
                                        <div className="lg:hidden mb-6">
                                            <div
                                                className={`w-14 h-14 rounded-2xl ${milestone.iconBg} ${milestone.iconColor} flex items-center justify-center`}
                                            >
                                                <milestone.icon size={28} strokeWidth={1.5} />
                                            </div>
                                        </div>

                                        {/* Date badge */}
                                        <div className="flex flex-wrap items-center gap-3 mb-5">
                                            <div
                                                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${milestone.bgAccent} ${milestone.textAccent} text-xs font-bold`}
                                            >
                                                <CalendarDays size={12} />
                                                {milestone.date}
                                            </div>
                                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 text-slate-500 text-xs font-medium">
                                                <MapPin size={12} />
                                                {milestone.location}
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors">
                                            {milestone.title}
                                        </h3>
                                        <p
                                            className={`text-sm font-semibold ${milestone.textAccent} uppercase tracking-wider mb-5`}
                                        >
                                            {milestone.subtitle}
                                        </p>

                                        {/* Description */}
                                        <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed mb-6">
                                            {milestone.description}
                                        </p>

                                        {/* Registration ID highlight */}
                                        <div
                                            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl ${milestone.bgAccent} border ${milestone.borderAccent} mb-6`}
                                        >
                                            <BadgeCheck size={16} className={milestone.iconColor} />
                                            <span className="text-sm font-mono font-semibold text-slate-700">
                                                {milestone.registrationId}
                                            </span>
                                        </div>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {milestone.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-xs font-medium text-slate-500 hover:bg-slate-100 transition-colors"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* CTA Button */}
                                        <a
                                            href={milestone.pdfLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r ${milestone.accentColor} text-white font-semibold text-sm shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-300 group/btn`}
                                        >
                                            <FileText size={16} />
                                            {milestone.buttonText}
                                            <ExternalLink
                                                size={14}
                                                className="opacity-60 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 transition-all"
                                            />
                                        </a>
                                    </div>

                                    {/* Decorative background element */}
                                    <div className="absolute -bottom-8 -right-8 opacity-[0.03] pointer-events-none">
                                        <milestone.icon size={180} />
                                    </div>
                                </div>
                            </div>

                            {/* Spacer for timeline layout */}
                            <div className="hidden lg:block w-[calc(50%-3rem)]" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom summary strip */}
            <div className="mt-16 md:mt-20 pt-12 border-t border-slate-100">
                <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
                    <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:shadow-md transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                            <ShieldCheck size={24} strokeWidth={1.5} />
                        </div>
                        <p className="text-2xl font-bold text-slate-800 mb-1">MSME</p>
                        <p className="text-sm text-slate-500">Government Registered</p>
                    </div>
                    <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:shadow-md transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                            <Landmark size={24} strokeWidth={1.5} />
                        </div>
                        <p className="text-2xl font-bold text-slate-800 mb-1">ICAR</p>
                        <p className="text-sm text-slate-500">Incubation Selectee</p>
                    </div>
                    <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:shadow-md transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-4">
                            <Award size={24} strokeWidth={1.5} />
                        </div>
                        <p className="text-2xl font-bold text-slate-800 mb-1">SIH 2025</p>
                        <p className="text-sm text-slate-500">Grand Finalist</p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Achievements;
