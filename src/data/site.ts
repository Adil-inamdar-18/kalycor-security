export const siteConfig = {
  name: 'Kalycor Services',
  shortName: 'Kalycor',
  tagline: 'Security That Keeps Your Business Moving.',
  description:
    'Kalycor Services provides professional security personnel, CCTV and surveillance solutions, commercial security, and facility services tailored to the way your site actually operates.',
  email: 'info@kalycorservices.com',
  phone: '+1 (000) 000-0000',
  address: 'Available on request',
  nav: [
    { label: 'Services', href: '/#services', dropdown: true },
    { label: 'About', href: '/about' },
    { label: 'Industries', href: '/industries' },
    { label: 'Contact', href: '/contact' },
  ],
  servicesNav: [
    { label: 'Security Services', href: '/services/security', description: 'Trained personnel and site-specific coverage' },
    { label: 'CCTV & Camera Solutions', href: '/services/cctv', description: 'Surveillance systems and monitoring' },
    { label: 'Commercial Services', href: '/services/commercial', description: 'Security for high-activity environments' },
    { label: 'Facility Services', href: '/services/facility', description: 'Housekeeping, maintenance, and manpower' },
  ],
  social: [
    { label: 'LinkedIn', href: '#' },
    { label: 'X', href: '#' },
    { label: 'Facebook', href: '#' },
  ],
  footerLinks: {
    company: [
      { label: 'About', href: '/about' },
      { label: 'Industries', href: '/industries' },
      { label: 'Contact', href: '/contact' },
    ],
    services: [
      { label: 'Security Services', href: '/services/security' },
      { label: 'CCTV & Camera Solutions', href: '/services/cctv' },
      { label: 'Commercial Services', href: '/services/commercial' },
      { label: 'Facility Services', href: '/services/facility' },
    ],
    industries: [
      { label: 'Retail & Shopping Centres', href: '/industries#retail' },
      { label: 'Commercial Buildings', href: '/industries#commercial' },
      { label: 'Corporate Offices', href: '/industries#corporate' },
      { label: 'Industrial Sites', href: '/industries#industrial' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
};

export type ServiceDetail = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  href: string;
  tagline: string;
  description: string;
  longDescription: string;
  heroImage: string;
  heroAlt: string;
  featured: boolean;
  features: { title: string; description: string }[];
  benefits: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  supportingImage: string;
  supportingAlt: string;
};

export const services: ServiceDetail[] = [
  {
    slug: 'security',
    shortTitle: 'Security Services',
    title: 'Security Services',
    eyebrow: 'Personnel & Protection',
    href: '/services/security',
    tagline: 'Trained security personnel deployed around the way your site operates.',
    description:
      'Professional security officers providing site security, access control, visitor management, patrolling, incident reporting, and shift-based coverage.',
    longDescription:
      'Our security personnel are the visible foundation of a safer site. We deploy trained officers who understand your environment, follow site-specific protocols, and maintain a reliable presence across every shift. From access control to incident reporting, every detail is built around how your location actually works.',
    heroImage: 'https://images.pexels.com/photos/27831371/pexels-photo-27831371.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heroAlt: 'Security officer in uniform ascending steps with professional bearing',
    featured: true,
    features: [
      { title: 'Site Security', description: 'Visible on-site presence deterring unauthorized access and maintaining order.' },
      { title: 'Access Control', description: 'Managed entry and exit points with verified visitor and contractor logging.' },
      { title: 'Visitor Management', description: 'Structured check-in and tracking for guests, deliveries, and service personnel.' },
      { title: 'Patrolling', description: 'Scheduled and randomized patrols covering perimeter and interior zones.' },
      { title: 'Incident Reporting', description: 'Documented, timely reporting for any event with clear escalation paths.' },
      { title: 'Shift-Based Coverage', description: 'Continuous coverage across day, night, and weekend shifts.' },
    ],
    benefits: [
      { title: 'Reliable Presence', description: 'Consistent, professional officers on-site when you need them.' },
      { title: 'Site-Specific Protocols', description: 'Procedures built around your site layout and risk profile.' },
      { title: 'Clear Communication', description: 'Direct reporting lines and documented incident logs.' },
      { title: 'Responsive Support', description: 'Rapid escalation and coordination with site management.' },
    ],
    process: [
      { step: '01', title: 'Understand Your Site', description: 'We assess your location, traffic patterns, and risk areas.' },
      { step: '02', title: 'Plan the Coverage', description: 'Shifts, patrol routes, and access points are mapped to your needs.' },
      { step: '03', title: 'Deploy', description: 'Trained officers are placed with site-specific briefings.' },
      { step: '04', title: 'Review & Improve', description: 'We monitor performance and adjust coverage as your site evolves.' },
    ],
    supportingImage: 'https://images.pexels.com/photos/29935587/pexels-photo-29935587.jpeg?auto=compress&cs=tinysrgb&w=1600',
    supportingAlt: 'Security guard standing near a building entrance at night',
  },
  {
    slug: 'cctv',
    shortTitle: 'CCTV & Cameras',
    title: 'CCTV & Camera Solutions',
    eyebrow: 'Surveillance & Monitoring',
    href: '/services/cctv',
    tagline: 'See more of your site. Respond faster when it matters.',
    description:
      'CCTV systems, camera placement, and monitoring designed to give you full site visibility and faster response.',
    longDescription:
      'Surveillance is about more than cameras — it is about visibility, awareness, and response. We design CCTV systems that cover the right angles, integrate with your site layout, and provide clear footage when you need it. From camera placement to monitoring, every element is built to help you see more and respond faster.',
    heroImage: 'https://images.pexels.com/photos/5966513/pexels-photo-5966513.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heroAlt: 'Modern security camera mounted on a building for recording and protection',
    featured: false,
    features: [
      { title: 'CCTV Systems', description: 'Camera selection and system design matched to your site layout and coverage needs.' },
      { title: 'Strategic Placement', description: 'Angle and positioning planning to eliminate blind spots and maximize visibility.' },
      { title: 'Monitoring', description: 'Live monitoring options for active surveillance and incident detection.' },
      { title: 'Recording & Storage', description: 'Reliable recording with configurable retention and easy retrieval.' },
      { title: 'Site Visibility', description: 'Comprehensive coverage of entrances, perimeters, and key interior zones.' },
      { title: 'Integration', description: 'Coordination with on-site security personnel for faster ground response.' },
    ],
    benefits: [
      { title: 'Full Coverage', description: 'Strategically placed cameras eliminate blind spots.' },
      { title: 'Faster Response', description: 'Live monitoring enables quicker reaction to incidents.' },
      { title: 'Clear Evidence', description: 'Reliable recording for investigation and review.' },
      { title: 'Deterrent Effect', description: 'Visible cameras reduce unauthorized activity.' },
    ],
    process: [
      { step: '01', title: 'Site Survey', description: 'We walk your site to identify coverage needs and blind spots.' },
      { step: '02', title: 'System Design', description: 'Camera types, angles, and recording setup are planned.' },
      { step: '03', title: 'Installation', description: 'Cameras and recording infrastructure are deployed and tested.' },
      { step: '04', title: 'Monitor & Maintain', description: 'Ongoing monitoring and system checks keep coverage reliable.' },
    ],
    supportingImage: 'https://images.pexels.com/photos/30692441/pexels-photo-30692441.jpeg?auto=compress&cs=tinysrgb&w=1600',
    supportingAlt: 'Security officer in a control room analyzing surveillance screens',
  },
  {
    slug: 'commercial',
    shortTitle: 'Commercial Services',
    title: 'Commercial Services',
    eyebrow: 'High-Activity Environments',
    href: '/services/commercial',
    tagline: 'Security for high-activity commercial environments.',
    description:
      'Security solutions for retail, shopping centres, commercial buildings, and corporate spaces with high foot traffic.',
    longDescription:
      'High-activity environments demand a different approach. Retail spaces, shopping centres, and commercial buildings face unique challenges — high foot traffic, diverse visitor profiles, and constant movement. We provide security coverage that fits the rhythm of your environment, from visible presence to incident response.',
    heroImage: 'https://images.pexels.com/photos/39962496/pexels-photo-39962496.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heroAlt: 'Vibrant shopping mall interior with escalators and retail shops',
    featured: false,
    features: [
      { title: 'Retail Security', description: 'Store-level coverage for loss prevention and customer safety.' },
      { title: 'Shopping Centre Security', description: 'Common-area patrols and coordinated response across multiple tenants.' },
      { title: 'Commercial Building Security', description: 'Lobby access control, visitor management, and floor coverage.' },
      { title: 'Corporate Space Security', description: 'Professional front-of-house presence and access management.' },
      { title: 'Crowd Management', description: 'Structured approach to high-traffic periods and events.' },
      { title: 'Loss Prevention', description: 'Proactive measures to reduce shrinkage and protect inventory.' },
    ],
    benefits: [
      { title: 'Visible Deterrence', description: 'Professional presence discourages theft and disruption.' },
      { title: 'Tenant Coordination', description: 'Unified security across multiple tenants and spaces.' },
      { title: 'Customer Safety', description: 'A secure environment for shoppers and visitors.' },
      { title: 'Flexible Coverage', description: 'Scaled up or down based on traffic patterns and events.' },
    ],
    process: [
      { step: '01', title: 'Environment Assessment', description: 'We study your traffic patterns, tenant layout, and risk zones.' },
      { step: '02', title: 'Coverage Plan', description: 'Personnel placement and patrol routes are designed for your space.' },
      { step: '03', title: 'Deploy & Brief', description: 'Officers are placed with site-specific and tenant-aware briefings.' },
      { step: '04', title: 'Review & Adapt', description: 'Coverage adjusts to seasonal traffic and evolving needs.' },
    ],
    supportingImage: 'https://images.pexels.com/photos/31204691/pexels-photo-31204691.jpeg?auto=compress&cs=tinysrgb&w=1600',
    supportingAlt: 'Bright interior of a contemporary shopping mall with glass railings',
  },
  {
    slug: 'facility',
    shortTitle: 'Facility Services',
    title: 'Facility Services',
    eyebrow: 'Support & Operations',
    href: '/services/facility',
    tagline: 'Supporting services that keep your site running cleanly and efficiently.',
    description:
      'Housekeeping, cleaning, maintenance coordination, front desk, and facility manpower to support your operations.',
    longDescription:
      'A well-managed site is more than secure — it is clean, functional, and well-maintained. Our facility services cover the essential operations that keep your environment running smoothly. From housekeeping to front desk support, we provide reliable manpower that integrates with your security infrastructure.',
    heroImage: 'https://images.pexels.com/photos/36303748/pexels-photo-36303748.jpeg?auto=compress&cs=tinysrgb&w=1920',
    heroAlt: 'Clean industrial hallway with a cleaning cart and supplies',
    featured: false,
    features: [
      { title: 'Housekeeping', description: 'Regular cleaning and upkeep of common areas, offices, and facilities.' },
      { title: 'Cleaning Services', description: 'Scheduled deep cleaning and specialized cleaning for different surfaces.' },
      { title: 'Maintenance Coordination', description: 'Coordinating repairs and upkeep with building management.' },
      { title: 'Front Desk', description: 'Professional reception and visitor coordination services.' },
      { title: 'Facility Manpower', description: 'General support staff for day-to-day facility operations.' },
      { title: 'Waste Management', description: 'Structured waste collection and disposal coordination.' },
    ],
    benefits: [
      { title: 'Integrated Operations', description: 'Facility services that complement your security setup.' },
      { title: 'Reliable Staffing', description: 'Consistent personnel who know your site.' },
      { title: 'Clean Environment', description: 'Professional upkeep that reflects on your brand.' },
      { title: 'Single Point of Contact', description: 'One team managing both security and facility support.' },
    ],
    process: [
      { step: '01', title: 'Needs Assessment', description: 'We identify what your facility needs to operate smoothly.' },
      { step: '02', title: 'Service Plan', description: 'Cleaning schedules, staffing, and coordination are mapped out.' },
      { step: '03', title: 'Deploy Team', description: 'Trained facility staff are placed with site-specific instructions.' },
      { step: '04', title: 'Monitor Quality', description: 'Regular checks ensure standards are maintained over time.' },
    ],
    supportingImage: 'https://images.pexels.com/photos/12703094/pexels-photo-12703094.jpeg?auto=compress&cs=tinysrgb&w=1600',
    supportingAlt: 'Spacious modern office with wooden desks and leather chairs',
  },
];

export type Industry = {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const industries: Industry[] = [
  {
    id: 'retail',
    title: 'Retail & Shopping Centres',
    description: 'Security for high-footfall retail environments and multi-tenant shopping centres.',
    image: 'https://images.pexels.com/photos/34728541/pexels-photo-34728541.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Shopping mall interior with escalators and shoppers',
  },
  {
    id: 'commercial',
    title: 'Commercial Buildings',
    description: 'Lobby access control, visitor management, and floor coverage for commercial properties.',
    image: 'https://images.pexels.com/photos/1381765/pexels-photo-1381765.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Modern spacious indoor lobby with architectural design',
  },
  {
    id: 'corporate',
    title: 'Corporate Offices',
    description: 'Professional front-of-house security and access management for corporate spaces.',
    image: 'https://images.pexels.com/photos/518244/pexels-photo-518244.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Office reception area with receptionist at a modern desk',
  },
  {
    id: 'industrial',
    title: 'Industrial Sites',
    description: 'Perimeter security, access control, and patrol coverage for industrial facilities.',
    image: 'https://images.pexels.com/photos/29119504/pexels-photo-29119504.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Industrial buildings glowing against the dark night sky',
  },
];

export type WhyItem = {
  number: string;
  title: string;
  description: string;
};

export const whyKalycor: WhyItem[] = [
  {
    number: '01',
    title: 'Reliable Presence',
    description: 'Consistent, professional personnel on-site when you need them — day, night, and weekends.',
  },
  {
    number: '02',
    title: 'Site-Specific Approach',
    description: 'Every protocol, patrol route, and access point is built around how your site actually operates.',
  },
  {
    number: '03',
    title: 'Clear Communication',
    description: 'Direct reporting lines, documented incident logs, and transparent coordination with your team.',
  },
  {
    number: '04',
    title: 'Responsive Support',
    description: 'Rapid escalation and adjustment when conditions change or new risks emerge.',
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  { step: '01', title: 'Understand Your Site', description: 'We assess your location, traffic patterns, and risk areas.' },
  { step: '02', title: 'Plan the Coverage', description: 'Shifts, patrol routes, and access points are mapped to your needs.' },
  { step: '03', title: 'Deploy', description: 'Trained personnel and systems are placed with site-specific briefings.' },
  { step: '04', title: 'Review & Improve', description: 'We monitor performance and adjust coverage as your site evolves.' },
];

export type TrustItem = {
  label: string;
  description: string;
};

export const trustItems: TrustItem[] = [
  { label: 'Security Personnel', description: 'Trained officers for site security and access control' },
  { label: 'CCTV & Surveillance', description: 'Camera systems and monitoring for full site visibility' },
  { label: 'Commercial Security', description: 'Coverage for retail, corporate, and commercial spaces' },
  { label: 'Facility Services', description: 'Housekeeping, maintenance, and facility manpower' },
  { label: 'Site-Specific Planning', description: 'Protocols built around your site layout and operations' },
];

export const heroImage = 'https://images.pexels.com/photos/35562107/pexels-photo-35562107.png?auto=compress&cs=tinysrgb&w=1920';
export const heroAlt = 'Security guard in uniform standing alert at a building entrance';

export const aboutImage = 'https://images.pexels.com/photos/27831371/pexels-photo-27831371.jpeg?auto=compress&cs=tinysrgb&w=1200';
export const aboutAlt = 'Security officer in uniform ascending steps with professional bearing';
export const aboutSecondaryImage = 'https://images.pexels.com/photos/1381765/pexels-photo-1381765.jpeg?auto=compress&cs=tinysrgb&w=800';
export const aboutSecondaryAlt = 'Modern spacious indoor lobby with architectural design';

export const ctaImage = 'https://images.pexels.com/photos/18441167/pexels-photo-18441167.jpeg?auto=compress&cs=tinysrgb&w=1920';
export const ctaAlt = 'Aerial view of a city skyline at night with illuminated skyscrapers';

export const securitySectionImage = 'https://images.pexels.com/photos/31282368/pexels-photo-31282368.jpeg?auto=compress&cs=tinysrgb&w=1200';
export const securitySectionAlt = 'Security guard in uniform standing outdoors in an urban setting';

export const cctvSectionImage = 'https://images.pexels.com/photos/30692441/pexels-photo-30692441.jpeg?auto=compress&cs=tinysrgb&w=1600';
export const cctvSectionAlt = 'Security officer in a control room analyzing surveillance screens';
export const cctvCameraImage = 'https://images.pexels.com/photos/5650141/pexels-photo-5650141.jpeg?auto=compress&cs=tinysrgb&w=800';
export const cctvCameraAlt = 'Security camera attached to a post against a blue sky';

export const commercialSectionImage = 'https://images.pexels.com/photos/35551656/pexels-photo-35551656.jpeg?auto=compress&cs=tinysrgb&w=1920';
export const commercialSectionAlt = 'Modern shopping mall with architecture and escalators';

export const facilitySectionImage = 'https://images.pexels.com/photos/36303748/pexels-photo-36303748.jpeg?auto=compress&cs=tinysrgb&w=1200';
export const facilitySectionAlt = 'Clean industrial hallway with a cleaning cart and supplies';
export const facilitySecondaryImage = 'https://images.pexels.com/photos/9068384/pexels-photo-9068384.jpeg?auto=compress&cs=tinysrgb&w=800';
export const facilitySecondaryAlt = 'Contemporary office space with minimalist design';
