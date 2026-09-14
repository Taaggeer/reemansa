import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  ar: {
    // Navigation
    nav_home: 'الرئيسية',
    nav_about: 'عن ريمان',
    nav_services: 'خدماتنا الهندسية',
    nav_safety: 'السلامة والدفاع المدني',
    nav_estimator: 'حاسبة التكلفة',
    nav_gallery: 'معرض المشاريع',
    nav_testimonials: 'آراء العملاء',
    nav_contact: 'تواصل معنا',
    nav_call_now: 'اتصل الآن',
    nav_whatsapp: 'واتساب',
    nav_address_bar: 'شارع الحسن بن علي، الروضة، الرياض 13211',
    nav_hours: 'السبت - الخميس: 8:00 ص - 9:00 م',
    nav_accredited: 'معتمد من الدفاع المدني ومنصة سلامة',
    nav_lang_toggle: 'English',

    // Hero
    hero_badge: 'شركة هندسية واستشارية معتمدة بالرياض',
    hero_title_1: 'ريمان للإستشارات الهندسية والسلامة',
    hero_title_2: 'ريادة في التصميم المعماري، الإنشائي واعتمادات الدفاع المدني',
    hero_desc: 'نقدم حلولاً هندسية متكاملة في الرياض والمملكة؛ من التصميم المعماري والإنشائي وفق كود البناء السعودي (SBC) إلى دراسات ومخططات السلامة المعتمدة لدى الدفاع المدني ومنصة سلامة.',
    hero_cta_services: 'استكشف كافة الخدمات الهندسية',
    hero_cta_quote: 'احسب تكلفة مشروعك فورياً',
    hero_pill_sbc: 'مطابقة 100% لكود البناء السعودي (SBC)',
    hero_pill_salamah: 'اعتماد رسمي عبر منصة سلامة',
    hero_pill_sce: 'كوادر معتمدة من هيئة المهندسين',
    hero_address_note: 'المقر: شارع الحسن بن علي، الروضة، الرياض 13211، المملكة العربية السعودية',

    // Stats
    stats_badge: 'إنجازات وأرقام شركة ريمان للإستشارات',
    stats_heading: 'أرقام تعكس الثقة، الدقة الهندسية، والالتزام بأعلى معايير السلامة',
    stats_subheading: 'مشاريع جارية ومنجزة في الرياض ومناطق المملكة',
    stats_completed_projects: 'مشروع هندسي مكتمل',
    stats_safety_licenses: 'رخصة ومخطط سلامة معتمد',
    stats_years_experience: 'عاماً من الخبرة الهندسية',
    stats_satisfaction: 'نسبة رضا العملاء والشركاء',
    stats_p1_title: 'مشروع هندسي مكتمل',
    stats_p1_desc: 'مخططات معمارية وإنشائية وفلل وأبراج بالرياض',
    stats_p1_badge: 'إنجاز معتمد',
    stats_p2_title: 'رخصة ومخطط سلامة معتمد',
    stats_p2_desc: 'اعتماد رسمي لدى الدفاع المدني عبر منصة سلامة',
    stats_p2_badge: 'دفاع مدني',
    stats_p3_title: 'عاماً من الخبرة الهندسية',
    stats_p3_desc: 'نخبة من المهندسين الاستشاريين ذوي الكفاءة العالية',
    stats_p3_badge: 'خبرة عريقة',
    stats_p4_title: 'نسبة رضا العملاء والشركاء',
    stats_p4_desc: 'التزام كامل بمواعيد التسليم ودقة المخططات الفنية',
    stats_p4_badge: 'ثقة متجددة',
    stats_guarantee_1: 'مطابقة 100% لكود البناء السعودي (SBC)',
    stats_guarantee_2: 'اعتمادات فورية للمنشآت عبر منصة سلامة',
    stats_guarantee_3: 'كوادر استشارية مرخصة من هيئة المهندسين',

    // About Section
    about_badge: 'عن شركة ريمان للإستشارات الهندسية والسلامة',
    about_heading: 'خبرة هندسية استشارية وطنية رائدة في العمارة، الإنشاء، واستشارات السلامة بالرياض',
    about_p1: 'تأسست شركة ريمان للإستشارات الهندسية والسلامة بالرياض لتكون الشريك الهندسي الموثوق للأفراد والشركات والمطورين في مدينة الرياض ومختلف مناطق المملكة العربية السعودية.',
    about_p2: 'نجمع بين الكفاءات الهندسية المرخصة من الهيئة السعودية للمهندسين، والاعتماد الرسمي لدى منصة سلامة والدفاع المدني، لنقدم تصاميم معمارية فريدة، وحسابات إنشائية دقيقة مطابقة لكود البناء السعودي (SBC)، مع سرعة في استخراج الرخص والاعتمادات.',
    about_val1_title: 'كود البناء السعودي (SBC)',
    about_val1_desc: 'مطابقة تامة لجميع أكواد البناء والاشتراطات البلدية وكود وادي حنيفة بالرياض.',
    about_val2_title: 'اعتماد الدفاع المدني (سلامة)',
    about_val2_desc: 'إعداد واعتماد مخططات السلامة ومكافحة الحريق والإنذار وإصدار التقارير الفنية المعتمدة.',
    about_val3_title: 'تصاميم معمارية إبداعية',
    about_val3_desc: 'ابتكار تصاميم عصرية تجمع بين الجمال، التوظيف الأمثل للمساحات، والهوية المعمارية السلمانية.',
    about_val4_title: 'سرعة الإنجاز والشفافية',
    about_val4_desc: 'متابعة دقيقة لمراحل المشروع واستخراج الرخص عبر المنصات الرقمية دون تأخير.',

    // Services Section
    services_badge: 'باقات وخدمات استشارية معتمدة',
    services_desc: 'نقدم حلولاً واستشارات هندسية متكاملة تشمل التصميم المعماري، الحسابات الإنشائية، وتصميم واعتماد مخططات أنظمة السلامة والوقاية من الحريق طبقاً لكود البناء السعودي (SBC) واشتراطات الدفاع المدني.',
    services_tab_all: 'جميع الخدمات',
    services_tab_arch: 'الهندسة المعمارية',
    services_tab_civil: 'الهندسة المدنية والإنشائية',
    services_tab_safety: 'استشارات السلامة والدفاع المدني',
    services_order_btn: 'طلب الخدمة والاستشارة',

    // Safety Focus Section
    safety_badge: 'اعتماد رسمي من الدفاع المدني - منصة سلامة',
    safety_desc: 'نختص في إعداد واعتماد دراسات ومخططات السلامة والوقاية من الحريق لكافة المنشآت والمستودعات والمصانع والأبراج بالرياض، مع إصدار شهادات الإنجاز والتقارير الفنية لتجديد التراخيص.',
    safety_request_btn: 'طلب اعتماد مخطط سلامة عبر الواتساب',
    safety_call_btn: 'اتصال بمهندس السلامة: 0559113990',

    // Project Gallery
    gallery_badge: 'معرض المشاريع المنجزة والمعتمدة',
    gallery_heading: 'نماذج من مشاريعنا الهندسية والمعمارية واستشارات السلامة بالرياض',
    gallery_desc: 'استكشف جانباً من أعمال شركة ريمان في التصميم المعماري، الإشراف الإنشائي، واعتمادات الدفاع المدني لكبرى المشاريع السكنية والتجارية والصناعية.',
    gallery_filter_all: 'جميع المشاريع',
    gallery_filter_arch: 'تصاميم معمارية وفلل',
    gallery_filter_civil: 'إنشائي وإشراف ميداني',
    gallery_filter_safety: 'سلامة ودفاع مدني',
    gallery_filter_commercial: 'مجمعات تجارية وإدارية',
    gallery_view_project: 'تفاصيل المشروع',
    gallery_close_modal: 'إغلاق',
    gallery_request_similar: 'طلب دراسة أو استشارة لمشروع مماثل',

    // Testimonials
    test_badge: 'تجارب وآراء عملائنا الكرام',
    test_heading: 'ماذا يقول عملاؤنا عن شركة ريمان للإستشارات الهندسية والسلامة',
    test_desc: 'نفخر بشراكتنا وثقة مئات العملاء والمطورين وأصحاب المنشآت التجارية والسكنية في الرياض.',
    test_rating_snap: '4.9 / 5.0 استناداً إلى أكثر من 180 تقييم معتمد',
    test_tab_all: 'جميع التقييمات',
    test_tab_arch: 'الهندسة المعمارية ورخص البناء',
    test_tab_civil: 'الهندسة الإنشائية والإشراف',
    test_tab_safety: 'استشارات السلامة والدفاع المدني',
    test_cta_title: 'هل تبدأ مشروعك الهندسي الجديد أو تحتاج لاعتماد مخطط سلامة بالرياض؟',
    test_cta_sub: 'انضم إلى قائمة عملائنا المميزين واستفد من استشارة هندسية أولية مجانية مع فريقنا.',
    test_cta_btn: 'تواصل عبر الواتساب',

    // Common Buttons & Contacts
    btn_request_quote: 'طلب تسعير واستشارة',
    btn_view_details: 'عرض التفاصيل والاشتراطات',
    btn_open_maps: 'فتح موقع الشركة في خرائط Google Maps',
    contact_phone_label: 'رقم الهاتف المباشر',
    contact_email_label: 'البريد الإلكتروني',
    contact_address_label: 'العنوان الوطني في الرياض',
    contact_hours_label: 'أوقات العمل واستقبال العملاء',
    hours_weekdays: 'السبت - الخميس: 8:00 صباحاً حتى 9:00 مساءً',
    hours_friday: 'الجمعة: إجازة أسبوعية',
    quick_calc_title: 'حاسبة التكلفة التقديرية للاستشارات الهندسية',

    // Cost Estimator
    calc_badge: 'حاسبة تقديرية فورية',
    calc_heading: 'احسب التكلفة التقديرية لمشروعك الهندسي',
    calc_desc: 'حدد نوع المنشأة والمساحة والخدمات المطلوبة لتحصل على تقدير أولي فوري وإمكانية إرساله مباشرة لمكتب ريمان لتقديم عرض سعر معتمد.',
    calc_step1: '1. حدد نوع المشروع:',
    calc_step2: '2. مساحة البناء الإجمالية:',
    calc_sqm: 'م²',
    calc_step3: '3. اختر حزمة الخدمات الهندسية:',
    calc_srv_arch: 'التصميم المعماري ورخص البناء (منصة بلدي)',
    calc_srv_civil: 'التصميم الإنشائي وحسابات الأحمال (كود SBC)',
    calc_srv_safety: 'مخططات واشتراطات السلامة (الدفاع المدني - سلامة)',
    calc_srv_supervision: 'الإشراف الهندسي الميداني واستلام مراحل الصب',
    calc_summary_title: 'ملخص التقدير المبدئي',
    calc_summary_type: 'نوع المبنى:',
    calc_summary_area: 'المساحة المحسوبة:',
    calc_summary_services: 'الحزم المختارة:',
    calc_est_range: 'المدى التقديري لتكلفة الاستشارة:',
    calc_disclaimer: '* قد تختلف القيمة بحسب متطلبات الموقع واشتراطات الكود التفصيلية',
    calc_send_wa: 'إرسال التقدير للمكتب عبر الواتساب',
    calc_call_btn: 'الاتصال للاستفسار: 0559113990',

    // Contact Section
    contact_badge: 'موقعنا ومعلومات التواصل المباشر',
    contact_heading: 'نسعد بزيارتكم واستقبال استفساراتكم الهندسية',
    contact_desc: 'فريق المهندسين والمستشارين في شركة ريمان جاهز لخدمتكم ومناقشة مخططاتكم في مقرنا بحي الروضة في الرياض أو عبر وسائل الاتصال المباشرة.',
    contact_card_title: 'بيانات التواصل والمقر',
    contact_address_val: 'شارع الحسن بن علي، الروضة، الرياض 13211',
    contact_wa_label: 'محادثات الواتساب الفورية',
    contact_wa_sub: 'رد فوري خلال أوقات الدوام الرسمي',
    contact_hours_val: 'السبت - الخميس: 8:00 صباحاً حتى 9:00 مساءً',
    contact_friday_val: 'الجمعة: إجازة أسبوعية',
    contact_open_map: 'فتح موقع الشركة في خرائط Google Maps',
    contact_form_title: 'طلب استشارة أو تسعير مشروع',
    contact_form_desc: 'املأ البيانات التالية وسيقوم مهندس مختص بالتواصل معك مباشرة ومناقشة متطلبات مشروعك.',
    contact_name_label: 'الاسم الكريم',
    contact_name_placeholder: 'أدخل اسمك',
    contact_phone_input_label: 'رقم الجوال',
    contact_service_label: 'نوع الخدمة المطلوبة',
    contact_proj_type_label: 'تصنيف المنشأة / المشروع',
    contact_notes_label: 'تفاصيل إضافية أو موقع المشروع بالرياض (اختياري)',
    contact_notes_placeholder: 'اكتب نبذة عن المشروع أو استفسارك...',
    contact_submit_btn: 'إرسال الطلب فوراً عبر الواتساب',
    contact_success_msg: 'جاري فتح محادثة الواتساب مع مهندس ريمان... نشكر تواصلكم!',

    // Footer
    footer_desc: 'شركة ريمان للإستشارات الهندسية والسلامة — مكتب هندسي استشاري معتمد بالرياض يقدم خدمات التصميم المعماري والإنشائي، الإشراف الميداني، واعتماد مخططات السلامة ومكافحة الحريق لدى الدفاع المدني.',
    footer_badge_cert: 'معتمد من الدفاع المدني - منصة سلامة - كود SBC',
    footer_links_title: 'روابط سريعة',
    footer_services_title: 'الخدمات المعتمدة',
    footer_contact_title: 'بيانات التواصل',
    footer_rights: 'جميع الحقوق محفوظة.',
    footer_location_tag: 'الرياض - الروضة',
    footer_certified_tag: 'مرخص ومعتمد رسمياً',
  },
  en: {
    // Navigation
    nav_home: 'Home',
    nav_about: 'About Us',
    nav_services: 'Engineering Services',
    nav_safety: 'Safety & Civil Defense',
    nav_estimator: 'Cost Estimator',
    nav_gallery: 'Projects Gallery',
    nav_testimonials: 'Testimonials',
    nav_contact: 'Contact Us',
    nav_call_now: 'Call Now',
    nav_whatsapp: 'WhatsApp',
    nav_address_bar: 'Al-Hassan Ibn Ali St., Ar Rawdah, Riyadh 13211',
    nav_hours: 'Sat - Thu: 8:00 AM - 9:00 PM',
    nav_accredited: 'Accredited by Civil Defense & Salamah Platform',
    nav_lang_toggle: 'العربية',

    // Hero
    hero_badge: 'Certified Engineering & Safety Consultancy in Riyadh',
    hero_title_1: 'Reeman Engineering & Safety Consultancy Co.',
    hero_title_2: 'Excellence in Architectural, Civil Design & Civil Defense Approvals',
    hero_desc: 'Delivering comprehensive engineering solutions across Riyadh and Saudi Arabia; from architectural & structural blueprints compliant with the Saudi Building Code (SBC) to certified fire safety engineering and Civil Defense approvals on the Salamah platform.',
    hero_cta_services: 'Explore All Engineering Services',
    hero_cta_quote: 'Estimate Project Cost Instantly',
    hero_pill_sbc: '100% Saudi Building Code (SBC) Compliant',
    hero_pill_salamah: 'Official Salamah Platform Accreditation',
    hero_pill_sce: 'Saudi Council of Engineers Certified',
    hero_address_note: 'HQ: Al-Hassan Ibn Ali St., Ar Rawdah, Riyadh 13211, Kingdom of Saudi Arabia',

    // Stats
    stats_badge: 'Reeman Consultancy Track Record & Milestones',
    stats_heading: 'Numbers reflecting trust, technical precision, and the highest safety standards',
    stats_subheading: 'Active & completed landmark projects across Riyadh & Saudi Arabia',
    stats_completed_projects: 'Completed Engineering Projects',
    stats_safety_licenses: 'Accredited Safety Plans & Permits',
    stats_years_experience: 'Years of Engineering Excellence',
    stats_satisfaction: 'Client & Partner Satisfaction Rate',
    stats_p1_title: 'Completed Engineering Projects',
    stats_p1_desc: 'Architectural, structural plans, luxury villas & commercial towers in Riyadh',
    stats_p1_badge: 'Certified Works',
    stats_p2_title: 'Approved Safety & Civil Defense Plans',
    stats_p2_desc: 'Official licensing through Civil Defense on the Salamah platform',
    stats_p2_badge: 'Civil Defense',
    stats_p3_title: 'Years of Engineering Excellence',
    stats_p3_desc: 'Elite team of certified senior consulting engineers',
    stats_p3_badge: 'Proven Heritage',
    stats_p4_title: 'Client & Partner Satisfaction Rate',
    stats_p4_desc: 'Full commitment to deadlines and technical blueprint accuracy',
    stats_p4_badge: 'Unwavering Trust',
    stats_guarantee_1: '100% Compliant with Saudi Building Code (SBC)',
    stats_guarantee_2: 'Rapid approvals via official Salamah platform',
    stats_guarantee_3: 'Licensed consultants with Saudi Council of Engineers',

    // About Section
    about_badge: 'About Reeman Engineering & Safety Consultancy',
    about_heading: 'A Premier Saudi Consulting Engineering Firm in Architecture, Structural & Safety in Riyadh',
    about_p1: 'Reeman Engineering & Safety Consultancy in Riyadh was established as a center of engineering excellence delivering superior quality and commitment in design, supervision, and blueprint development for residential, commercial, and industrial sectors.',
    about_p2: 'We take pride in our certified consulting engineers registered with the Saudi Council of Engineers and official accreditation from Civil Defense (Salamah), ensuring 100% compliance with the Saudi Building Code and swift regulatory approvals.',
    about_val1_title: 'Saudi Building Code (SBC)',
    about_val1_desc: 'Strict compliance with all national building codes, municipal guidelines, and local regulations.',
    about_val2_title: 'Civil Defense Certification (Salamah)',
    about_val2_desc: 'Drafting and approving fire protection, alarm blueprints, and certified inspection reports.',
    about_val3_title: 'Creative Architectural Concepts',
    about_val3_desc: 'Innovative modern designs merging visual elegance, spatial functionality, and Salmani identity.',
    about_val4_title: 'Punctual Delivery & Transparency',
    about_val4_desc: 'Rigorous workflow tracking and swift digital portal processing without project delays.',

    // Services Section
    services_badge: 'Accredited Consultancy Services',
    services_desc: 'We provide comprehensive engineering solutions encompassing architectural design, structural calculations, and certified fire safety blueprints adhering to the Saudi Building Code (SBC) and Civil Defense standards.',
    services_tab_all: 'All Services',
    services_tab_arch: 'Architecture',
    services_tab_civil: 'Civil & Structural',
    services_tab_safety: 'Fire Safety & Civil Defense',
    services_order_btn: 'Request Service & Inquire',

    // Safety Focus Section
    safety_badge: 'Official Civil Defense Accreditation - Salamah',
    safety_desc: 'Specializing in fire protection engineering, suppression blueprints, and egress plans for warehouses, factories, retail, and towers across Riyadh with certified technical completion reports.',
    safety_request_btn: 'Request Safety Approval via WhatsApp',
    safety_call_btn: 'Direct Call to Safety Engineer: 0559113990',

    // Project Gallery
    gallery_badge: 'Completed & Certified Projects Portfolio',
    gallery_heading: 'Showcase of Our Architectural, Structural & Fire Safety Projects in Riyadh',
    gallery_desc: 'Explore a selection of Reeman’s completed works in architectural design, structural supervision, and Civil Defense approvals across residential, commercial, and industrial facilities.',
    gallery_filter_all: 'All Projects',
    gallery_filter_arch: 'Architecture & Luxury Villas',
    gallery_filter_civil: 'Structural & Site Supervision',
    gallery_filter_safety: 'Fire Safety & Civil Defense',
    gallery_filter_commercial: 'Commercial & Corporate',
    gallery_view_project: 'Project Details',
    gallery_close_modal: 'Close',
    gallery_request_similar: 'Request Consultation for Similar Project',

    // Testimonials
    test_badge: 'Client Reviews & Case Studies',
    test_heading: 'What Clients Say About Reeman Engineering & Safety Consultancy',
    test_desc: 'Proud of our long-term partnership with hundreds of real estate developers, commercial facility managers, and homeowners in Riyadh.',
    test_rating_snap: '4.9 / 5.0 based on 180+ verified client evaluations',
    test_tab_all: 'All Reviews',
    test_tab_arch: 'Architecture & Building Permits',
    test_tab_civil: 'Structural & Site Supervision',
    test_tab_safety: 'Fire Safety & Civil Defense',
    test_cta_title: 'Starting a new project or need certified Civil Defense plans in Riyadh?',
    test_cta_sub: 'Join our distinguished clients and get an initial free engineering consultation with our experts.',
    test_cta_btn: 'Connect via WhatsApp',

    // Common Buttons & Contacts
    btn_request_quote: 'Request Quote & Consultation',
    btn_view_details: 'View Requirements & Details',
    btn_open_maps: 'Open Location in Google Maps',
    contact_phone_label: 'Direct Phone Line',
    contact_email_label: 'Official Email',
    contact_address_label: 'National Address in Riyadh',
    contact_hours_label: 'Office Working Hours',
    hours_weekdays: 'Saturday - Thursday: 8:00 AM to 9:00 PM',
    hours_friday: 'Friday: Weekly Holiday',
    quick_calc_title: 'Engineering Consultancy Cost Calculator',

    // Cost Estimator
    calc_badge: 'Instant Estimate Calculator',
    calc_heading: 'Calculate Your Engineering Project Estimate',
    calc_desc: 'Select facility type, area, and required services to get an instant initial estimate with direct WhatsApp transmission to Reeman office.',
    calc_step1: '1. Select Project Type:',
    calc_step2: '2. Total Built-Up Area:',
    calc_sqm: 'sq.m',
    calc_step3: '3. Select Engineering Services Package:',
    calc_srv_arch: 'Architectural Design & Building Permits (Balady)',
    calc_srv_civil: 'Structural Design & Load Analysis (SBC Code)',
    calc_srv_safety: 'Fire Safety Blueprints (Civil Defense - Salamah)',
    calc_srv_supervision: 'Site Engineering Supervision & Concrete Inspection',
    calc_summary_title: 'Initial Estimate Summary',
    calc_summary_type: 'Building Type:',
    calc_summary_area: 'Calculated Area:',
    calc_summary_services: 'Selected Packages:',
    calc_est_range: 'Indicative Consultancy Cost Range:',
    calc_disclaimer: '* Actual cost may vary depending on site specifics and detailed code requirements',
    calc_send_wa: 'Send Estimate to Office via WhatsApp',
    calc_call_btn: 'Direct Call: 0559113990',

    // Contact Section
    contact_badge: 'Our Location & Direct Contact Info',
    contact_heading: 'We Welcome Your Visit & Inquiries',
    contact_desc: 'Our team of consulting engineers at Reeman is ready to serve you and discuss your blueprints at our office in Ar Rawdah, Riyadh or via direct channels.',
    contact_card_title: 'Contact & Headquarters Info',
    contact_address_val: 'Al-Hassan Ibn Ali St., Ar Rawdah, Riyadh 13211',
    contact_wa_label: 'Instant WhatsApp Inquiries',
    contact_wa_sub: 'Prompt reply during official working hours',
    contact_hours_val: 'Saturday - Thursday: 8:00 AM to 9:00 PM',
    contact_friday_val: 'Friday: Weekly Holiday',
    contact_open_map: 'Open Location in Google Maps',
    contact_form_title: 'Request Consultation or Project Quotation',
    contact_form_desc: 'Fill out the form below and a consulting engineer will reach out directly to discuss your requirements.',
    contact_name_label: 'Full Name',
    contact_name_placeholder: 'Enter your full name',
    contact_phone_input_label: 'Mobile Number',
    contact_service_label: 'Requested Engineering Service',
    contact_proj_type_label: 'Project / Facility Type',
    contact_notes_label: 'Additional Details or Project Location (Optional)',
    contact_notes_placeholder: 'Brief notes or questions about your project...',
    contact_submit_btn: 'Send Request Instantly via WhatsApp',
    contact_success_msg: 'Opening WhatsApp chat with Reeman engineer... Thank you!',

    // Footer
    footer_desc: 'Reeman Engineering & Safety Consultancy — A certified consulting firm in Riyadh offering architectural & structural design, site supervision, and Civil Defense fire safety approvals.',
    footer_badge_cert: 'Certified by Civil Defense - Salamah Platform - SBC Code',
    footer_links_title: 'Quick Links',
    footer_services_title: 'Approved Services',
    footer_contact_title: 'Contact Details',
    footer_rights: 'All rights reserved.',
    footer_location_tag: 'Riyadh - Ar Rawdah',
    footer_certified_tag: 'Officially Licensed & Certified',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('ar');

  useEffect(() => {
    // Check saved language or default to Arabic
    const saved = localStorage.getItem('reeman_lang') as Language;
    if (saved === 'ar' || saved === 'en') {
      setLanguageState(saved);
      document.documentElement.dir = saved === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = saved;
      document.title = saved === 'ar' 
        ? 'شركة ريمان للإستشارات الهندسية والسلامة | الرياض'
        : 'Reeman Engineering & Safety Consultancy | Riyadh';
    } else {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
      document.title = 'شركة ريمان للإستشارات الهندسية والسلامة | الرياض';
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('reeman_lang', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.title = lang === 'ar'
      ? 'شركة ريمان للإستشارات الهندسية والسلامة | الرياض'
      : 'Reeman Engineering & Safety Consultancy | Riyadh';
  };

  const toggleLanguage = () => {
    const nextLang: Language = language === 'ar' ? 'en' : 'ar';
    setLanguage(nextLang);
  };

  const isRTL = language === 'ar';

  const t = (key: string): string => {
    return translations[language][key] || translations['ar'][key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        setLanguage,
        isRTL,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
