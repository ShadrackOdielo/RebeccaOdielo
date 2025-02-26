<template>
  <UContainer id="contact" class="bg-(--ui-bg-elevated) flex flex-col items-center justify-center min-h-screen py-2">
    
      <UContainer class="max-w-2xl mx-auto text-center py-16">
        <h2 class="text-3xl font-bold mb-4">Get in Touch</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-8">
          Feel free to reach out for collaborations, opportunities, or just a chat!
        </p>
    
        <!-- Contact Form -->
        <UCard class="p-6 shadow-lg">
          <UForm :schema="schema" @submit="submitForm">
            <UFormField label="Your Name" name="name">
              <UInput v-model="form.name" placeholder="John Doe" />
            </UFormField>
    
            <UFormField label="Email Address" name="email">
              <UInput v-model="form.email" placeholder="example@email.com" type="email" />
            </UFormField>
    
            <UFormField label="Message" name="message">
              <UTextarea v-model="form.message" placeholder="Write your message here..." />
            </UFormField>
    
            <UButton type="submit" color="primary" block>Send Message</UButton>
          </UForm>
        </UCard>
    
        <!-- Social Links -->
        <div class="flex justify-center mt-6 space-x-4">
          <UButton
            color="primary" variant="ghost" icon="i-logos-linkedin"
            to="https://www.linkedin.com/in/rebecca-odielo-0282542b4" target="_blank" />
          <UButton
              color="primary" variant="ghost" icon="i-heroicons-envelope"
            to="mailto:rebecca@example.com" />
          <UButton
              color="primary" variant="ghost" icon="i-heroicons-phone"
            to="tel:+254712345678" />
        </div>
      </UContainer>
      </UContainer>
      </template>
    
    <script setup>
    import { z } from 'zod';
    
    // Form validation schema
    const schema = z.object({
      name: z.string().min(2, "Name must be at least 2 characters"),
      email: z.string().email("Invalid email address"),
      message: z.string().min(10, "Message must be at least 10 characters")
    });
    
    const form = reactive({
      name: "",
      email: "",
      message: ""
    });
    
    const submitForm = async () => {
      console.log("Form submitted:", form);
      alert("Message sent successfully!");
    };
    </script>
    
