"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Layers3,
  MessageCircle,
  PackageCheck,
  Phone,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";

const WHATSAPP_NUMBER = "971521928821";
const SALES_PHONE = "+971 52 192 8821";

const productImages = [
  {
    src: "/images/products/carpet-tape/01_Carpet_Tape_Main.jpg",
    alt: "Rameez Carpets double-sided carpet tape 5cm x 25m roll",
    label: "Product",
  },
  {
    src: "/images/products/carpet-tape/02_Carpet_Tape_Size_5cm_x_25m.jpg",
    alt: "Carpet tape size 5 cm width 25 metre length",
    label: "Size & dimensions",
  },
  {
    src: "/images/products/carpet-tape/03_Carpet_Tape_Features.jpg",
    alt: "Mesh reinforced residue-free exhibition carpet tape",
    label: "Key features",
  },
  {
    src: "/images/products/carpet-tape/04_Carpet_Tape_Front_White.jpg",
    alt: "Front view of Rameez Carpets white double-sided carpet tape roll",
    label: "Front view",
  },
  {
    src: "/images/products/carpet-tape/05_Carpet_Tape_Side_White.jpg",
    alt: "Side view of Rameez Carpets carpet tape roll",
    label: "Side view",
  },
  {
    src: "/images/products/carpet-tape/06_Carpet_Tape_Core_White.jpg",
    alt: "Core detail of Rameez Carpets double-sided carpet tape",
    label: "Core detail",
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Strong grip",
    description:
      "Holds exhibition carpet firmly on floors, joints and edges.",
  },
  {
    icon: Layers3,
    title: "Mesh reinforced",
    description:
      "Fibre mesh adds strength and helps prevent stretching or tearing during installation.",
  },
  {
    icon: Sparkles,
    title: "Residue-free removal",
    description:
      "Peels off clean after the event, leaving no sticky marks on the floor.",
  },
  {
    icon: PackageCheck,
    title: "Easy installation",
    description:
      "Simply apply the tape, peel off the liner and press the carpet down.",
  },
];

const specifications = [
  ["Product", "Double-sided carpet tape"],
  ["Width", "5 cm (50 mm)"],
  ["Length", "25 metres per roll"],
  ["Type", "Double-sided"],
  ["Backing", "Fibre mesh reinforced"],
  ["Colour", "White / cream"],
  ["Best for", "Exhibition carpet, event carpet, joints and edges"],
  ["Removal", "Clean, residue-free"],
];

const applications = [
  "Exhibition halls and trade shows",
  "Event stands and booths",
  "Weddings, conferences and functions",
  "Carpet joints, edges and borders",
  "Temporary flooring installations",
];

const installationSteps = [
  {
    number: "01",
    title: "Apply the tape",
    description: "Stick the tape securely onto the floor where required.",
  },
  {
    number: "02",
    title: "Peel the liner",
    description: "Remove the protective liner to expose the adhesive.",
  },
  {
    number: "03",
    title: "Press the carpet",
    description: "Position the carpet and press it firmly onto the tape.",
  },
];

export default function CarpetTapePageClient() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [formLoading, setFormLoading] = useState(false);
  const [formStatus, setFormStatus] = useState<
    "success" | "error" | ""
  >("");

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello Rameez Carpets, I am interested in your Double-Sided Carpet Tape (5 cm x 25 m). Please share bulk pricing and availability."
  )}`;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (formLoading) return;

    setFormLoading(true);
    setFormStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      formName: "Carpet Tape Product Enquiry",
      page: "/products/carpet-tape-5cm-25m",
      product: "Rameez Carpets Double-Sided Carpet Tape – 5 cm x 25 m",
      name: String(formData.get("name") || ""),
      company: String(formData.get("company") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      quantity: String(formData.get("quantity") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch("/api/send-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error("Unable to submit your enquiry.");
      }

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "generate_lead",
        form_name: "Carpet Tape Product Enquiry",
        product_name: "Double-Sided Carpet Tape 5 cm x 25 m",
      });

      form.reset();
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    } finally {
      setFormLoading(false);
    }
  }

  return (
    <main className="bg-white text-[#17243b]">
      {/* HERO / PRODUCT GALLERY */}
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-8 lg:pb-24 lg:pt-16">
        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-gray-500">
          <a href="/" className="transition hover:text-red-600">
            Home
          </a>
          <span>/</span>
          <a
            href="/products"
            className="transition hover:text-red-600"
          >
            Products
          </a>
          <span>/</span>
          <span className="font-medium text-[#17243b]">
            Carpet Tape
          </span>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* IMAGE GALLERY */}
          <div>
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-gray-100 bg-[#f7f8fa]">
              <Image
                src={productImages[selectedImage].src}
                alt={productImages[selectedImage].alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-3 sm:p-6"
              />
              <div className="absolute left-5 top-5 rounded-full bg-[#17243b] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white">
                Professional grade
              </div>
            </div>

            <div className="mt-4 grid grid-cols-6 gap-2 sm:gap-3">
              {productImages.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  aria-label={`View ${image.label}`}
                  aria-pressed={selectedImage === index}
                  className={`relative aspect-square overflow-hidden rounded-xl border-2 bg-[#f7f8fa] transition ${
                    selectedImage === index
                      ? "border-red-600"
                      : "border-transparent hover:border-gray-300"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="120px"
                    className="object-contain p-1"
                  />
                </button>
              ))}
            </div>
            <p className="mt-3 text-center text-xs text-gray-400">
              Select an image to view product details
            </p>
          </div>

          {/* PRODUCT INFORMATION */}
          <div className="flex flex-col lg:pt-5">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-1 w-8 rounded-full bg-red-600" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
                Exhibition & Event Accessories
              </span>
            </div>

            <h1 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-[#17243b] sm:text-4xl lg:text-[46px]">
              Double-Sided Carpet Tape
              <span className="mt-2 block text-2xl font-medium text-gray-500 sm:text-3xl">
                5 cm x 25 m
              </span>
            </h1>

            <p className="mt-6 text-base leading-8 text-gray-600">
              Strong double-sided carpet tape made for exhibition carpet
              rolls. It holds the carpet firmly through the whole event
              and peels off clean afterwards with no sticky marks. Each
              roll is 5 cm wide and 25 metres long.
            </p>

            <div className="my-7 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-[#f5f6f8] p-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Roll width
                </span>
                <strong className="mt-1 block text-2xl text-[#17243b]">
                  5 cm
                </strong>
                <span className="text-xs text-gray-500">50 mm</span>
              </div>
              <div className="rounded-xl bg-[#f5f6f8] p-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Roll length
                </span>
                <strong className="mt-1 block text-2xl text-[#17243b]">
                  25 m
                </strong>
                <span className="text-xs text-gray-500">Per roll</span>
              </div>
            </div>

            <div className="space-y-3 border-t border-gray-100 py-6">
              {[
                "Fibre mesh reinforced backing",
                "Strong double-sided adhesive",
                "Clean, residue-free removal",
                "Designed for temporary event use",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-red-600"
                  />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <a
                href="#enquiry"
                className="inline-flex min-h-14 flex-1 items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-red-700"
              >
                Request Bulk Pricing
                <ArrowRight size={18} />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 flex-1 items-center justify-center gap-2 rounded-lg border border-[#17243b] px-6 py-4 text-sm font-bold text-[#17243b] transition hover:bg-[#17243b] hover:text-white"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </div>

            <p className="mt-5 text-xs leading-6 text-gray-500">
              Available in bulk for stand builders, event companies and
              contractors. Supply across the UAE, Oman, Qatar and Saudi
              Arabia.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#f5f6f8] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
              Why choose our carpet tape
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#17243b] sm:text-4xl">
              Secure installation. Clean removal.
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              Designed for exhibition, event and temporary carpet
              installations where reliable fixing and clean removal
              matter.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-gray-100 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
                    <Icon size={24} />
                  </div>
                  <span className="text-xs font-bold tracking-widest text-gray-300">
                    0{index + 1}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-[#17243b]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section className="bg-[#14243d] py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-400">
              Product information
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Technical specifications
            </h2>
            <p className="mt-5 max-w-lg leading-8 text-slate-300">
              A practical double-sided fixing solution for exhibition
              carpet, event flooring, carpet joints and temporary
              installations.
            </p>

            <div className="mt-8 flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-red-600">
                <PackageCheck size={25} />
              </div>
              <div>
                <p className="font-semibold">Bulk supply available</p>
                <p className="mt-1 text-sm text-slate-300">
                  Contact our sales team for your project requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10">
            {specifications.map(([label, value], index) => (
              <div
                key={label}
                className={`grid grid-cols-[115px_1fr] gap-4 px-5 py-4 sm:grid-cols-[145px_1fr] ${
                  index % 2 === 0 ? "bg-white/[0.07]" : "bg-white/[0.03]"
                }`}
              >
                <span className="text-sm text-slate-400">{label}</span>
                <span className="text-sm font-medium leading-6 text-white">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
              Versatile applications
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[#17243b] sm:text-4xl">
              Made for exhibitions, events and temporary flooring
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              Keep exhibition carpet flat and in place on concrete, tiles
              and hall floors. The tape helps prevent carpet movement,
              curling and lifting at joints and edges.
            </p>
          </div>

          <div className="rounded-2xl bg-[#f5f6f8] p-6 sm:p-9">
            <h3 className="mb-6 text-lg font-bold text-[#17243b]">
              Recommended applications
            </h3>
            <div className="space-y-4">
              {applications.map((application) => (
                <div
                  key={application}
                  className="flex items-center gap-3 border-b border-gray-200 pb-4 last:border-0 last:pb-0"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-600 text-white">
                    <Check size={15} />
                  </span>
                  <span className="text-sm font-medium text-gray-700">
                    {application}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INSTALLATION */}
      <section className="border-y border-gray-100 bg-[#fafafa] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
              Quick installation
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[#17243b] sm:text-4xl">
              Three simple steps
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              A straightforward application process for stand builders
              and carpet installers.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {installationSteps.map((step, index) => (
              <div
                key={step.number}
                className="relative rounded-2xl border border-gray-100 bg-white p-7 sm:p-9"
              >
                <span className="text-5xl font-black tracking-tight text-red-100">
                  {step.number}
                </span>
                <h3 className="mt-5 text-xl font-bold text-[#17243b]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {step.description}
                </p>
                {index < 2 && (
                  <div className="absolute right-5 top-10 hidden text-gray-300 md:block">
                    <ArrowRight size={22} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENQUIRY */}
      <section
        id="enquiry"
        className="scroll-mt-24 bg-white py-16 sm:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
              Bulk orders & enquiries
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#17243b] sm:text-4xl">
              Need carpet tape for your next project?
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              Tell us what you need. Our sales team can assist with bulk
              requirements for exhibition companies, event organisers,
              stand builders and contractors.
            </p>

            <div className="mt-8 space-y-5">
              <a
                href={`tel:${SALES_PHONE.replace(/\s/g, "")}`}
                className="flex items-center gap-4 text-[#17243b] transition hover:text-red-600"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
                  <Phone size={20} />
                </span>
                <span>
                  <span className="block text-xs text-gray-500">
                    Call our sales team
                  </span>
                  <strong className="mt-1 block">{SALES_PHONE}</strong>
                </span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[#17243b] transition hover:text-red-600"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
                  <MessageCircle size={20} />
                </span>
                <span>
                  <span className="block text-xs text-gray-500">
                    WhatsApp enquiries
                  </span>
                  <strong className="mt-1 block">Chat with our team</strong>
                </span>
              </a>

              <div className="flex items-center gap-4 text-[#17243b]">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
                  <Truck size={20} />
                </span>
                <span>
                  <span className="block text-xs text-gray-500">
                    Supply markets
                  </span>
                  <strong className="mt-1 block">
                    UAE · Oman · Qatar · Saudi Arabia
                  </strong>
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_15px_60px_rgba(20,36,61,0.08)] sm:p-9">
            <h3 className="text-2xl font-bold text-[#17243b]">
              Request a bulk quotation
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Complete the form and our team will get back to you.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="tape-name"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Your name *
                  </label>
                  <input
                    id="tape-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Enter your name"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="tape-company"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Company name
                  </label>
                  <input
                    id="tape-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Company name"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="tape-email"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Email address *
                  </label>
                  <input
                    id="tape-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@company.com"
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="tape-phone"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Phone / WhatsApp *
                  </label>
                  <input
                    id="tape-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+971 ..."
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="tape-quantity"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Estimated quantity
                </label>
                <input
                  id="tape-quantity"
                  name="quantity"
                  type="text"
                  placeholder="e.g. 20 rolls"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:bg-white"
                />
              </div>

              <div>
                <label
                  htmlFor="tape-message"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Project details
                </label>
                <textarea
                  id="tape-message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full resize-y rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:bg-white"
                />
              </div>

              {formStatus === "success" && (
                <div
                  role="status"
                  className="rounded-lg bg-green-50 p-4 text-sm font-medium text-green-800"
                >
                  Thank you! Your enquiry has been submitted successfully.
                  Our team will contact you.
                </div>
              )}

              {formStatus === "error" && (
                <div
                  role="alert"
                  className="rounded-lg bg-red-50 p-4 text-sm font-medium text-red-700"
                >
                  Something went wrong. Please try again or contact us
                  through WhatsApp.
                </div>
              )}

              <button
                type="submit"
                disabled={formLoading}
                className="flex min-h-14 w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {formLoading ? "Submitting..." : "Submit Enquiry"}
                {!formLoading && <ArrowRight size={18} />}
              </button>

              <p className="text-center text-xs leading-5 text-gray-400">
                Your enquiry will be sent directly to the Rameez Carpets
                sales team.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-red-600 px-5 py-12 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Preparing for your next exhibition?
            </h2>
            <p className="mt-2 text-sm leading-6 text-white/85">
              Contact Rameez Carpets for bulk carpet tape enquiries.
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-7 py-3 text-sm font-bold text-red-600 transition hover:bg-gray-100"
          >
            <MessageCircle size={18} />
            Enquire on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}