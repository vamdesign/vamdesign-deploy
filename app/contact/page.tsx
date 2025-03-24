"use client"

import React, { useState, useEffect } from "react"
import Nav from "@/components/nav"
import Footer from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle } from "lucide-react"
import Image from "next/image"
import { BackgroundOpacityControl } from "@/components/background-opacity-control"

export default function ContactPage() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  
  // Form validation
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  })
  
  // Form submission status
  const [submitted, setSubmitted] = useState(false)
  
  // Background opacity (0-1 scale for CSS)
  const [bgOpacity, setBgOpacity] = useState(0.2)

  // Form validation function
  const validateForm = () => {
    let isValid = true
    const newErrors = {
      name: "",
      email: "",
      message: "",
    }

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
      isValid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      console.log("Form submitted:", formData)
      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  // Input change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  // Background opacity handler
  const handleOpacityChange = (value: number) => {
    setBgOpacity(value)
  }

  return (
    <main className="min-h-screen bg-[#F0F6F9] relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{ opacity: bgOpacity }}
      >
        <Image
          src="/images/backgrounds/vam_design_contact.png"
          alt="Design background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Nav />
        <div className="pt-24 pb-16 px-6">
          <h1 className="text-4xl font-bold text-[#007EA7] mb-12 text-center">
            (Engage) // Ready to Collaborate
          </h1>
          
          <div className="max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#007EA7] mb-1 font-montserrat">
                  Name*
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Identify"
                  className={`w-full font-montserrat ${errors.name ? "border-red-500 focus:border-red-500" : ""}`}
                />
                {errors.name && (
                  <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                    <AlertCircle className="h-4 w-4" />
                    <span>{errors.name}</span>
                  </div>
                )}
              </div>
              
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#007EA7] mb-1 font-montserrat">
                  Email*
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Initializing connection"
                  className={`w-full font-montserrat ${errors.email ? "border-red-500 focus:border-red-500" : ""}`}
                />
                {errors.email && (
                  <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                    <AlertCircle className="h-4 w-4" />
                    <span>{errors.email}</span>
                  </div>
                )}
              </div>
              
              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#007EA7] mb-1 font-montserrat">
                  Message*
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Let's start this collaboration!"
                  className={`w-full h-32 font-montserrat ${
                    errors.message ? "border-red-500 focus:border-red-500" : ""
                  }`}
                />
                {errors.message && (
                  <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                    <AlertCircle className="h-4 w-4" />
                    <span>{errors.message}</span>
                  </div>
                )}
              </div>
              
              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="rounded-[100px] border border-white bg-white/60 text-[#007ea7] px-8 py-2.5 transition-all duration-500 font-medium hover:bg-white/90"
                  disabled={submitted}
                >
                  {submitted ? "Message Sent!" : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>

      {/* Background opacity control */}
      <BackgroundOpacityControl 
        defaultOpacity={20} 
        onChange={handleOpacityChange} 
      />
    </main>
  )
}