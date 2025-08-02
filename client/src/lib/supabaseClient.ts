import { supabase } from './supabase';
import type { Database } from './supabase';

// Type definitions
type ContactMessage = Database['public']['Tables']['contact_messages']['Row'];
type ContactMessageInsert = Database['public']['Tables']['contact_messages']['Insert'];
type CourseApplication = Database['public']['Tables']['course_applications']['Row'];
type CourseApplicationInsert = Database['public']['Tables']['course_applications']['Insert'];
type DemoApplication = Database['public']['Tables']['demo_applications']['Row'];
type DemoApplicationInsert = Database['public']['Tables']['demo_applications']['Insert'];
type NewsletterSubscription = Database['public']['Tables']['newsletter_subscriptions']['Row'];
type NewsletterSubscriptionInsert = Database['public']['Tables']['newsletter_subscriptions']['Insert'];
type EventRegistration = Database['public']['Tables']['event_registrations']['Row'];
type EventRegistrationInsert = Database['public']['Tables']['event_registrations']['Insert'];

// Contact Messages
export const createContactMessage = async (data: {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  course_interest?: string;
  message: string;
}): Promise<ContactMessage> => {
  const contactData: ContactMessageInsert = {
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email,
    phone: data.phone,
    course_interest: data.course_interest || null,
    message: data.message
  };

  const { data: result, error } = await supabase
    .from('contact_messages')
    .insert(contactData)
    .select()
    .single();

  if (error) {
    console.error('Error creating contact message:', error);
    throw new Error(error.message);
  }

  return result;
};

// Course Applications
export const createCourseApplication = async (data: {
  name: string;
  email: string;
  phone: string;
  course: string;
  experience_level: string;
  start_date?: string;
  additional_info?: string;
}): Promise<CourseApplication> => {
  const applicationData: CourseApplicationInsert = {
    full_name: data.full_name,
    email: data.email,
    phone: data.phone,
    course_name: data.course_name,
    experience_level: data.experience_level,
    start_date: data.start_date || null,
    additional_info: data.additional_info || null
  };

  const { data: result, error } = await supabase
    .from('course_applications')
    .insert(applicationData)
    .select()
    .single();

  if (error) {
    console.error('Error creating course application:', error);
    throw new Error(error.message);
  }

  return result;
};

// Demo Applications
export const createDemoApplication = async (data: {
  name: string;
  phone: string;
  email: string;
  course_for_demo: string;
  available_time: string;
  preferred_date?: string;
}): Promise<DemoApplication> => {
  const demoData: DemoApplicationInsert = {
    name: data.name,
    phone: data.phone,
    email: data.email,
    course_for_demo: data.course_for_demo,
    available_time: data.available_time,
    preferred_date: data.preferred_date || null
  };

  const { data: result, error } = await supabase
    .from('demo_applications')
    .insert(demoData)
    .select()
    .single();

  if (error) {
    console.error('Error creating demo application:', error);
    throw new Error(error.message);
  }

  return result;
};

// Newsletter Subscriptions
export const createNewsletterSubscription = async (data: {
  email: string;
}): Promise<NewsletterSubscription> => {
  const subscriptionData: NewsletterSubscriptionInsert = {
    email: data.email
  };

  const { data: result, error } = await supabase
    .from('newsletter_subscriptions')
    .insert(subscriptionData)
    .select()
    .single();

  if (error) {
    console.error('Error creating newsletter subscription:', error);
    throw new Error(error.message);
  }

  return result;
};

export const checkNewsletterSubscription = async (email: string): Promise<boolean> => {
  const { data, error } = await supabase
    .from('newsletter_subscriptions')
    .select('email')
    .eq('email', email)
    .single();

  if (error && error.code !== 'PGRST116') { // PGRST116 is "not found" error
    console.error('Error checking newsletter subscription:', error);
    throw new Error(error.message);
  }

  return !!data;
};

// Event Registrations
export const createEventRegistration = async (data: {
  name: string;
  degree: string;
  year: string;
  college_name: string;
  university_name: string;
  contact_number: string;
  alternate_number?: string;
  email_id: string;
  certificate_code: string;
}): Promise<EventRegistration> => {
  const eventData = {
    name: data.name,
    degree: data.degree,
    year: data.year,
    college_name: data.college_name,
    university_name: data.university_name,
    contact_number: data.contact_number,
    alternate_number: data.alternate_number || null,
    email_id: data.email_id,
    certificate_code: data.certificate_code
  };

  const { data: result, error } = await supabase
    .from('event_registrations')
    .insert(eventData)
    .select()
    .single();

  if (error) {
    console.error('Error creating event registration:', error);
    throw new Error(error.message);
  }

  return result;
};

// Authentication functions
export const getCurrentUser = async () => {
  // TODO: Replace with your authentication service
  console.log('TODO: Implement getCurrentUser');
  return null;
};

export const signUp = async (email: string, password: string) => {
  // TODO: Replace with your authentication service
  console.log('TODO: Implement signUp', { email });
  return { user: null, session: null };
};

export const signIn = async (email: string, password: string) => {
  // TODO: Replace with your authentication service
  console.log('TODO: Implement signIn', { email });
  return { user: null, session: null };
};

export const signOut = async () => {
  // TODO: Replace with your authentication service
  console.log('TODO: Implement signOut');
};