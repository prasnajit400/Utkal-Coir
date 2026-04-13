import { Phone, Mail, MapPin, Clock, CreditCard, Award } from "lucide-react";
import { BUSINESS_INFO } from "@/constants";
import { Card, CardContent } from "@/components/ui/card";

export function ContactInfo() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-950 mb-8">Get In Touch</h2>
            <p className="text-brand-700 mb-12 text-lg">
              Have questions about our products or want to place a custom order? We're here to help you with sustainable coir solutions.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-brand-800" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-950 mb-1">Our Location</h4>
                  <p className="text-brand-700">
                    <strong>{BUSINESS_INFO.name}</strong><br />
                    {BUSINESS_INFO.location.address}, {BUSINESS_INFO.location.area}<br />
                    {BUSINESS_INFO.location.city}, {BUSINESS_INFO.location.state} - {BUSINESS_INFO.location.pincode}
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-100 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-brand-800" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-950 mb-1">Call Us</h4>
                  <p className="text-brand-700">{BUSINESS_INFO.contact.phone}</p>
                  <p className="text-brand-700">{BUSINESS_INFO.contact.alternatePhone}</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-100 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-brand-800" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-950 mb-1">Email Us</h4>
                  <p className="text-brand-700">{BUSINESS_INFO.contact.email}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-brand-100 bg-brand-50/50 shadow-none rounded-3xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-5 h-5 text-brand-800" />
                  <h3 className="text-xl font-bold text-brand-950">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  {Object.entries(BUSINESS_INFO.hours).map(([day, time]) => (
                    <div key={day} className="flex justify-between text-sm border-b border-brand-200/50 pb-2">
                      <span className="font-medium text-brand-800">{day}</span>
                      <span className="text-brand-600">{time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-brand-100 bg-brand-50/50 shadow-none rounded-3xl">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <CreditCard className="w-5 h-5 text-brand-800" />
                    <h4 className="font-bold text-brand-950">Payments</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {BUSINESS_INFO.pricing.paymentMethods.map(m => (
                      <span key={m} className="text-xs bg-white px-3 py-1 rounded-full border border-brand-200 text-brand-700">
                        {m}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-brand-100 bg-brand-50/50 shadow-none rounded-3xl">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-5 h-5 text-brand-800" />
                    <h4 className="font-bold text-brand-950">Operational</h4>
                  </div>
                  <p className="text-xs text-brand-600">GST: {BUSINESS_INFO.operational.gst}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
