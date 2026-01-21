import React, { useState } from 'react';
import Section from './ui/Section';
import { CheckCircle2, Send, AlertCircle, Twitter, Instagram, Facebook } from 'lucide-react';
import { savePilotEnquiry } from '../api/pilotEnquiry';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form data state
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    role: '',
    pilotObjectives: '',
    email: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // 1. Save to Cosmos DB via backend API
      const result = await savePilotEnquiry({
        fullName: formData.fullName,
        organization: formData.organization,
        role: formData.role,
        pilotObjectives: formData.pilotObjectives,
        email: formData.email
      });

      if (!result.success) {
        setError(result.error || 'Failed to submit enquiry. Please try again.');
        return;
      }

      // 2. Send email notification via EmailJS
      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
          {
            to_email: 'Farmauraofc@gmail.com',
            from_name: formData.fullName,
            from_email: formData.email,
            organization: formData.organization,
            role: formData.role,
            pilot_objectives: formData.pilotObjectives,
            submission_date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
        );
        console.log('✅ Email notification sent successfully');
      } catch (emailError) {
        console.error('⚠️ Email notification failed (but data saved):', emailError);
        // Don't show error to user since data was saved successfully
      }

      // Success - show confirmation
      setSubmitted(true);
      // Reset form
      setFormData({
        fullName: '',
        organization: '',
        role: '',
        pilotObjectives: '',
        email: ''
      });

    } catch (err) {
      console.error('Error submitting form:', err);
      setError('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" title="Partner with FarmAura" subtitle="Inquire about institutional pilots and decision-support integration." className="bg-white">
      <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl shadow-lg overflow-hidden border border-slate-100 flex flex-col md:flex-row">

        {/* Contact Info */}
        <div className="bg-primary p-8 md:w-1/3 text-white flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-6">Institutional Inquiries</h3>
            <p className="mb-6 text-white/80 leading-relaxed">
              We are actively seeking design partners within government incubators and FPOs for early-stage validation.
            </p>
            <div className="space-y-4">
              <div>
                <span className="block text-xs uppercase tracking-wider text-secondary font-bold">Email</span>
                <a href="mailto:Farmauraofc@gmail.com" className="text-lg hover:text-secondary transition-colors">
                  Farmauraofc@gmail.com
                </a>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-secondary font-bold">Coordination</span>
                <span className="text-lg">Karnataka, India</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-secondary font-bold mb-2">Connect With Us</span>
                <div className="flex gap-3">
                  <a
                    href="https://x.com/FarmAura_co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/farmaura.co?utm_source=qr&igsh=MXN6ZWp1d2U4dHlsaw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://www.facebook.com/share/17HnXJQd5w/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-sm opacity-60">© FarmAura Technologies Pvt Ltd.</p>
          </div>
        </div>

        {/* Form */}
        <div className="p-8 md:w-2/3">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-500">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Request Received</h3>
              <p className="text-slate-600">
                Thank you for your interest. Our institutional partnership team will review your inquiry and contact you within 48 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-primary font-semibold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                  <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input
                    required
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-md border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Dr. Rajesh Kumar"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Organization</label>
                  <input
                    required
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-md border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Dept of Agriculture / FPO"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Role / Designation</label>
                  <input
                    required
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-md border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="District Officer / Lead"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-md border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Pilot Objectives</label>
                <textarea
                  required
                  rows={4}
                  name="pilotObjectives"
                  value={formData.pilotObjectives}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-md border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Tell us about the region or crop cluster you're interested in piloting..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white font-bold py-3 rounded-md hover:bg-primary-light transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Saving to Database...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Pilot Inquiry
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Contact;