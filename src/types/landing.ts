/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  benefits: string[];
}

export interface StatisticItem {
  value: string;
  label: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
}

export interface TimelineStep {
  step: string;
  title: string;
  description: string;
  duration: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface WhyReason {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
