"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

export default function ExportPage() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const [showModal, setShowModal] = useState(true);
  const [formLoading, setFormLoading] = useState(false);
  const [formStatus, setFormStatus] = useState<"success" | "error" | "">("");

  const t = {
    en: {
      heroTitle: <>Exhibition Carpets <br /> Exported From UAE <br /> To Every Corner Of The <br /> <span className="text-red-600">GCC</span></>,
      heroDesc: "Bulk and wholesale exhibition carpet supply for organisers, booth contractors and event companies in Oman, Qatar and Saudi Arabia — custom sizes, fast turnaround, one trusted exporter.",
      btnQuote: "Get a Quote on WhatsApp",
      btnShip: "See GCC Shipping Details",
      stats: [
        { n: "3", l: "GCC Countries Served" },
        { n: "48HR", l: "Quote Response Time" },
        { n: "100%", l: "Custom Sizes Available" },
        { n: "Dubai", l: "Based & Stocked" }
      ],
      whereShip: "WHERE WE SHIP",
      builtFor: "BUILT FOR GCC EXHIBITION ORGANISERS",
      whereDesc: "Whether it's a trade show in Muscat, a conference in Doha or a national exhibition in Riyadh — we supply and ship exhibition carpet rolls sized exactly to your hall.",
      cards: [
        { c: "UAE", s: "Dubai, Abu Dhabi & all Emirates", t: "Same/Next Day", o: "Bulk & retail", m: "Standard rolls", l: "Request UAE pricing →" },
        { c: "OMAN", s: "Muscat, Salalah & nationwide", t: "2–3 days", o: "Bulk & retail", m: "50m² rolls", l: "Request Oman pricing →" },
        { c: "QATAR", s: "Doha & exhibition zones", t: "3–4 days", o: "Bulk & wholesale", m: "50m² rolls", l: "Request Qatar pricing →" },
        { c: "SAUDI ARABIA", s: "Riyadh, Jeddah & Dammam", t: "4–6 days", o: "Wholesale & distributor", m: "100m² rolls", l: "Request Saudi pricing →" }
      ],
      whyTitle: "ONE EXPORTER. THREE MARKETS. NO HEADACHES.",
      whySub: "Why Buyers Choose Rameez",
      whyGrid: [
        { n: "01", t: "DUBAI STOCK", d: "Carpets held ready in our Dubai warehouse — no waiting on overseas factory lead times." },
        { n: "02", t: "CUSTOM SIZING", d: "Tell us your hall or booth dimensions — we cut and ship rolls to match exactly." },
        { n: "03", t: "BULK PRICING", d: "Wholesale rates for distributors, contractors and event companies ordering in volume." },
        { n: "04", t: "EXPORT DOCUMENTATION", d: "We handle the paperwork for cross-border GCC shipment, so customs stays simple." }
      ],
      colorTitle: "STOCKED & READY TO SHIP",
      colorSub: "Popular Exhibition Colours",
      colorDesc: "Our most-ordered exhibition carpet colours for GCC trade shows and conferences. Custom colours available on bulk orders.",
      cta: "Ready to Order for Your GCC Exhibition?",
      ctaDesc: "Send your hall size, country and quantity on WhatsApp — we usually reply with pricing within a few hours.",
      ctaBtn: "Chat on WhatsApp Now",
      formTitle: "Request an Export Quote",
      formDesc: "Tell us what you need and our sales team will get back to you.",
      formName: "Full Name",
      formCompany: "Company Name",
      formEmail: "Business Email",
      formCountry: "Country",
      formPhone: "WhatsApp / Phone Number",
      formProduct: "Product Interested In",
      formQuantity: "Estimated Quantity",
      formMessage: "Additional Requirements",
      formSubmit: "Submit Quote Request",
      formSending: "Submitting...",
      formSuccess: "Thank you! Your enquiry has been sent successfully.",
      formError: "Something went wrong. Please try again.",
      formSelect: "Select a product",
    },
    ar: {
      heroTitle: <>سجاد المعارض <br /> يُصدر من الإمارات <br /> إلى كل ركن من <br /> <span className="text-red-600">دول الخليج</span></>,
      heroDesc: "توريد سجاد المعارض بالجملة لمنظمي الفعاليات ومقاولي الأجنحة وشركات الفعاليات في عمان وقطر والسعودية - مقاسات مخصصة، تسليم سريع، ومصدر موثوق.",
      btnQuote: "احصل على عرض سعر عبر واتساب",
      btnShip: "شاهد تفاصيل الشحن لدول الخليج",
      stats: [
        { n: "3", l: "دول الخليج التي نخدمها" },
        { n: "48 ساعة", l: "وقت الاستجابة لعروض الأسعار" },
        { n: "100%", l: "مقاسات مخصصة متاحة" },
        { n: "دبي", l: "مقرنا ومخازننا" }
      ],
      whereShip: "أين نشحن",
      builtFor: "مصمم لمنظمي المعارض في دول الخليج",
      whereDesc: "سواء كان معرضاً تجارياً في مسقط، أو مؤتمراً في الدوحة، أو معرضاً وطنياً في الرياض - نحن نقوم بتوريد وشحن لفات سجاد المعارض بمقاسات دقيقة تناسب قاعتك.",
      cards: [
        { c: "الإمارات", s: "دبي، أبوظبي وجميع الإمارات", t: "نفس اليوم/اليوم التالي", o: "جملة وتجزئة", m: "لفات قياسية", l: "طلب تسعير الإمارات →" },
        { c: "عمان", s: "مسقط، صلالة وجميع أنحاء السلطنة", t: "٢-٣ أيام", o: "جملة وتجزئة", m: "لفات 50 متر مربع", l: "طلب تسعير عمان →" },
        { c: "قطر", s: "الدوحة ومناطق المعارض", t: "٣-٤ أيام", o: "جملة وتوزيع", m: "لفات 50 متر مربع", l: "طلب تسعير قطر →" },
        { c: "السعودية", s: "الرياض، جدة والدمام", t: "٤-٦ أيام", o: "جملة وموزعين", m: "لفات 100 متر مربع", l: "طلب تسعير السعودية →" }
      ],
      whyTitle: "مُصدر واحد. ثلاث أسواق. بدون عناء.",
      whySub: "لماذا يختار المشترون رامز",
      whyGrid: [
        { n: "01", t: "مخزون دبي", d: "سجاد جاهز في مستودعاتنا بدبي - لا انتظار لمواعيد المصانع الخارجية." },
        { n: "02", t: "مقاسات مخصصة", d: "أخبرنا بمقاسات القاعة أو الجناح - نقوم بالقص والشحن لتناسب احتياجك بدقة." },
        { n: "03", t: "أسعار الجملة", d: "أسعار تنافسية للموزعين والمقاولين وشركات تنظيم الفعاليات." },
        { n: "04", t: "وثائق التصدير", d: "نتولى جميع الأوراق الخاصة بشحنات دول الخليج لتسهيل الإجراءات الجمركية." }
      ],
      colorTitle: "جاهز للشحن الفوري",
      colorSub: "ألوان المعارض الأكثر طلباً",
      colorDesc: "ألوان سجاد المعارض الأكثر طلباً للمؤتمرات في دول الخليج. تتوفر ألوان مخصصة للطلبات الكبيرة.",
      cta: "هل أنت مستعد للطلب لمعرضك في دول الخليج؟",
      ctaDesc: "أرسل مقاس القاعة، البلد، والكمية المطلوبة عبر واتساب — وسنقوم بالرد عليك بأسعارنا خلال ساعات.",
      ctaBtn: "تحدث عبر واتساب الآن",
      formTitle: "طلب عرض سعر للتصدير",
      formDesc: "أخبرنا باحتياجاتك وسيتواصل معك فريق المبيعات.",
      formName: "الاسم الكامل",
      formCompany: "اسم الشركة",
      formEmail: "البريد الإلكتروني للعمل",
      formCountry: "الدولة",
      formPhone: "رقم واتساب / الهاتف",
      formProduct: "المنتج المطلوب",
      formQuantity: "الكمية التقديرية",
      formMessage: "متطلبات إضافية",
      formSubmit: "إرسال طلب عرض السعر",
      formSending: "جارٍ الإرسال...",
      formSuccess: "شكراً لك! تم إرسال استفسارك بنجاح.",
      formError: "حدث خطأ. يرجى المحاولة مرة أخرى.",
      formSelect: "اختر المنتج",
    }
  };

  const active = t[lang];
  const handleExportSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormLoading(true);
    setFormStatus("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const leadData = {
      formName: "Export Quote Request",
      language: lang,
      page: "/export",
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      country: formData.get("country"),
      phone: formData.get("phone"),
      product: formData.get("product"),
      quantity: formData.get("quantity"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/send-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leadData),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error("Failed to submit enquiry");
      }

      // Track only confirmed successful enquiries in Google Tag Manager.
      const dataLayerWindow = window as Window & {
        dataLayer?: Array<Record<string, unknown>>;
      };

      dataLayerWindow.dataLayer = dataLayerWindow.dataLayer || [];
      dataLayerWindow.dataLayer.push({
        event: "generate_lead",
        form_name: "Export Quote Request",
        language: lang,
      });

      setFormStatus("success");
      form.reset();
    } catch (error) {
      console.error("Export form submission error:", error);
      setFormStatus("error");
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <div className="bg-[#F5F2EC] min-h-screen text-[#1A1F2B]" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {showModal && (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-6">
          <div className="bg-white p-10 rounded text-center">
            <h2 className="text-2xl font-bold mb-6">Select Language / اختر اللغة</h2>
            <div className="flex gap-4 justify-center">
              <button onClick={() => { setLang('en'); setShowModal(false); }} className="bg-red-700 text-white px-8 py-3 rounded">English</button>
              <button onClick={() => { setLang('ar'); setShowModal(false); }} className="bg-red-700 text-white px-8 py-3 rounded">العربية</button>
            </div>
          </div>
        </div>
      )}

      <section className="relative bg-[#1A1F2B] py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/shipping-hero.webp" alt="Shipping Logistics" fill className="object-cover opacity-[0.15]" priority />
        </div>
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="text-red-600 font-bold tracking-widest uppercase text-xs mb-4 flex items-center">
              <span className="w-8 h-0.5 bg-red-600 mr-3"></span> {lang === 'en' ? "Dubai Exhibition Carpet Exporter" : "مُصدر سجاد المعارض في دبي"}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-6 text-white">{active.heroTitle}</h1>
            <p className="text-gray-200 mb-8 leading-relaxed">{active.heroDesc}</p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/971563775899" className="bg-[#2D7D5C] text-white px-8 py-4 rounded font-bold">{active.btnQuote}</a>
              <a href="#shipping-details" className="border border-gray-400 text-white px-8 py-4 rounded font-bold hover:bg-white hover:text-black transition">{active.btnShip}</a>
            </div>
          </div>
          <div className="bg-[#10141d] p-8 rounded border border-gray-700">
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-8 font-bold">{lang === 'en' ? "Dubai Export Route" : "مسار التصدير من دبي"}</h3>
            <div className="relative flex items-center justify-between">
              <div className="absolute top-2 left-0 right-0 h-0.5 bg-gray-700"></div>
              {[
                { l: lang === 'en' ? "DUBAI" : "دبي", s: lang === 'en' ? "Warehouse" : "المستودع" },
                { l: lang === 'en' ? "OMAN" : "عمان", s: lang === 'en' ? "2–3 days" : "٢-٣ أيام" },
                { l: lang === 'en' ? "QATAR" : "قطر", s: lang === 'en' ? "3–4 days" : "٣-٤ أيام" },
                { l: lang === 'en' ? "SAUDI" : "السعودية", s: lang === 'en' ? "4–6 days" : "٤-٦ أيام" }
              ].map((node, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-red-600 border-2 border-[#10141d] mb-2"></div>
                  <span className="text-[10px] font-bold tracking-widest">{node.l}</span>
                  <span className="text-[9px] text-gray-500">{node.s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
          {active.stats.map((stat, i) => (
            <div key={i} className="py-8 text-center"><span className="text-2xl font-bold text-red-700 block">{stat.n}</span><span className="text-xs uppercase text-gray-500 tracking-widest">{stat.l}</span></div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12"><div className="text-red-600 text-sm tracking-[0.2em] uppercase font-bold mb-3">{active.whereShip}</div><h2 className="text-4xl font-bold mb-4">{active.builtFor}</h2><p className="text-[#8C8478] max-w-2xl">{active.whereDesc}</p></div>
          <div className="grid md:grid-cols-4 gap-6">
            {active.cards.map((c, i) => (
              <div key={i} className="bg-white border-t-4 border-red-700 p-6 shadow-sm"><h3 className="text-xl font-bold mb-1">{c.c}</h3><p className="text-[#8C8478] text-xs mb-6 h-10">{c.s}</p><div className="border-t border-gray-100 pt-4 space-y-3 text-sm"><div className="flex justify-between"><span className="text-[#8C8478]">{lang === 'en' ? "Transit" : "النقل"}</span><span className="font-bold">{c.t}</span></div><div className="flex justify-between"><span className="text-[#8C8478]">{lang === 'en' ? "Type" : "النوع"}</span><span className="font-bold">{c.o}</span></div><div className="flex justify-between"><span className="text-[#8C8478]">{lang === 'en' ? "Min. order" : "الحد الأدنى"}</span><span className="font-bold">{c.m}</span></div></div><a href="#" className="block mt-6 text-[#2D7D5C] font-semibold text-sm">{c.l}</a></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12"><div className="text-red-700 text-xs font-bold uppercase mb-3">{active.whySub}</div><h2 className="text-4xl font-bold">{active.whyTitle}</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-4 border border-gray-200">
            {active.whyGrid.map((item, i) => (
              <div key={i} className="p-8 border-r border-gray-200 bg-[#F9F7F4]"><div className="text-red-700 font-bold text-sm mb-4">{item.n}</div><h4 className="font-bold mb-3">{item.t}</h4><p className="text-gray-600 text-sm">{item.d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-[#1A1F2B] text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-10"><h2 className="text-3xl font-bold">{active.colorTitle}</h2><p className="text-gray-400 text-sm">{active.colorDesc}</p></div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[ { c: "#C81E3A" }, { c: "#2B4570" }, { c: "#4A4D50" }, { c: "#2D5A42" }, { c: "#7B6650" }, { c: "#1A1A1A" } ].map((item, i) => (
              <div key={i} className="bg-[#10141D] p-3 border border-gray-800 rounded text-center"><div className="w-full aspect-video mb-3" style={{ backgroundColor: item.c }}></div></div>
            ))}
          </div>
        </div>
      </section>

      {/* Export quote request form */}
      <section id="export-quote" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {active.formTitle}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {active.formDesc}
            </p>
          </div>

          <form
            onSubmit={handleExportSubmit}
            className="bg-[#F9F7F4] border border-gray-200 rounded-lg p-6 md:p-8 shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="export-name" className="block text-sm font-semibold mb-2">
                  {active.formName} *
                </label>
                <input
                  id="export-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  maxLength={120}
                  className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-[#1A1F2B] outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700"
                />
              </div>

              <div>
                <label htmlFor="export-company" className="block text-sm font-semibold mb-2">
                  {active.formCompany}
                </label>
                <input
                  id="export-company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  maxLength={160}
                  className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-[#1A1F2B] outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700"
                />
              </div>

              <div>
                <label htmlFor="export-email" className="block text-sm font-semibold mb-2">
                  {active.formEmail} *
                </label>
                <input
                  id="export-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-[#1A1F2B] outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700"
                />
              </div>

              <div>
                <label htmlFor="export-country" className="block text-sm font-semibold mb-2">
                  {active.formCountry} *
                </label>
                <select
                  id="export-country"
                  name="country"
                  required
                  defaultValue=""
                  className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-[#1A1F2B] outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700"
                >
                  <option value="" disabled>
                    {active.formCountry}
                  </option>
                  <option value="United Arab Emirates">{lang === "en" ? "United Arab Emirates" : "الإمارات العربية المتحدة"}</option>
                  <option value="Oman">{lang === "en" ? "Oman" : "عُمان"}</option>
                  <option value="Qatar">{lang === "en" ? "Qatar" : "قطر"}</option>
                  <option value="Saudi Arabia">{lang === "en" ? "Saudi Arabia" : "المملكة العربية السعودية"}</option>
                  <option value="Bahrain">{lang === "en" ? "Bahrain" : "البحرين"}</option>
                  <option value="Kuwait">{lang === "en" ? "Kuwait" : "الكويت"}</option>
                  <option value="Other">{lang === "en" ? "Other" : "أخرى"}</option>
                </select>
              </div>

              <div>
                <label htmlFor="export-phone" className="block text-sm font-semibold mb-2">
                  {active.formPhone} *
                </label>
                <input
                  id="export-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  maxLength={40}
                  className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-[#1A1F2B] outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700"
                />
              </div>

              <div>
                <label htmlFor="export-product" className="block text-sm font-semibold mb-2">
                  {active.formProduct} *
                </label>
                <select
                  id="export-product"
                  name="product"
                  required
                  defaultValue=""
                  className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-[#1A1F2B] outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700"
                >
                  <option value="" disabled>
                    {active.formSelect}
                  </option>
                  <option value="Exhibition Carpet Rolls">{lang === "en" ? "Exhibition Carpet Rolls" : "لفائف سجاد المعارض"}</option>
                  <option value="Custom Size Exhibition Carpet">{lang === "en" ? "Custom Size Exhibition Carpet" : "سجاد معارض بمقاسات مخصصة"}</option>
                  <option value="Other Carpet Requirements">{lang === "en" ? "Other Carpet Requirements" : "متطلبات أخرى للسجاد"}</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="export-quantity" className="block text-sm font-semibold mb-2">
                  {active.formQuantity}
                </label>
                <input
                  id="export-quantity"
                  name="quantity"
                  type="text"
                  maxLength={100}
                  placeholder={lang === "en" ? "e.g. 500 m² or 100 rolls" : "مثال: 500 متر مربع أو 100 لفة"}
                  className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-[#1A1F2B] outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="export-message" className="block text-sm font-semibold mb-2">
                  {active.formMessage}
                </label>
                <textarea
                  id="export-message"
                  name="message"
                  rows={4}
                  maxLength={2000}
                  className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-[#1A1F2B] outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={formLoading}
              className="mt-6 w-full rounded bg-[#C81E3A] px-8 py-4 font-bold text-white transition hover:bg-red-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {formLoading ? active.formSending : active.formSubmit}
            </button>

            {formStatus === "success" && (
              <p role="status" aria-live="polite" className="mt-4 rounded bg-green-100 p-4 text-center text-green-800">
                {active.formSuccess}
              </p>
            )}

            {formStatus === "error" && (
              <p role="alert" className="mt-4 rounded bg-red-100 p-4 text-center text-red-800">
                {active.formError}
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="bg-[#C81E3A] py-20 px-6 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">{active.cta}</h2>
        <p className="max-w-xl mx-auto mb-10 opacity-90">{active.ctaDesc}</p>
        <a href="https://wa.me/971563775899" className="inline-flex items-center gap-3 bg-[#1A1F2B] px-10 py-4 rounded font-bold"><MessageCircle size={20} /> {active.ctaBtn}</a>
      </section>

      <a href="https://wa.me/971563775899" target="_blank" className="fixed bottom-6 right-6 bg-[#25D366] p-4 rounded-full shadow-2xl text-white z-50"><MessageCircle size={30} /></a>
    </div>
  );
}