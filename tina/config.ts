import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "images",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "home",
        label: "Home Page",
        path: "data/en/home",
        format: "yaml",
        templates: [
          {
            name: "about",
            label: "About Section",
            fields: [
              {
                name: "sectionTitle",
                label: "Title",
                type: "string",
              },
              {
                type: "image",
                name: "image",
                label: "Image",
              },
              {
                name: "firstParagraph",
                label: "Paragraph A",
                type: "rich-text",
              },
              {
                name: "secondParagraph",
                label: "Paragraph B",
                type: "rich-text",
              },
            ],
          },
          {
            name: "intro",
            label: "Intro Slides",
            fields: [
              {
                name: "items",
                label: "Slides",
                type: "object",
                list: true,

                templates: [
                  {
                    name: "serviceSlide",
                    label: "Service Slide",
                    ui: {
                      itemProps: (item) => {
                        return { label: item?.title };
                      },
                    },
                    fields: [
                      {
                        type: "string",
                        name: "title",
                        label: "Title",
                      },
                      {
                        type: "string",
                        name: "subtitle",
                        label: "Subtitle",
                      },
                      {
                        type: "image",
                        name: "image",
                        label: "Image",
                      },
                      {
                        name: "sectionLink",
                        label: "Link to section in home page",
                        type: "string",
                        list: true,
                        options: [
                          {
                            value: "#contracting-services",
                            label: "General Contracting Section"
                          }, {
                            value: "#supply-trade-services",
                            label: "Supply & trade section"
                          }
                        ]
                      },
                      {
                        type: "string",
                        name: "learnMoreLink",
                        label: "Service Page Link",
                        description: "The link to service specific page",
                      },
                    ],
                  },
                  {
                    name: "projectSlide",
                    label: "Project Slide",
                    ui: {
                      itemProps: (item) => {
                        return { label: item?.title };
                      },
                    },
                    fields: [
                      {
                        type: "string",
                        name: "title",
                        label: "Title",
                      },
                      {
                        type: "string",
                        name: "subtitle",
                        label: "Subtitle",
                      },
                      {
                        type: "image",
                        name: "image",
                        label: "Image",
                      },

                      {
                        type: "string",
                        name: "projectLink",
                        label: "Project Page Link",
                        description: "The link to project specific page",
                      },

                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "supply_trade_services",
            label: "Supply&Trade Services",
            fields: [
              {
                name: "title",
                label: "Title",
                type: "string",
                isTitle: true,
                required: true,
              },
              {
                name: "description",
                label: "Description",
                type: "string",
              },
              {
                name: "backgroundImage",
                label: "Background Image",
                type: "image",
              },
              {
                name: "subServices",
                label: "Sub-services",
                type: "object",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.title };
                  },
                },
                fields: [
                  {
                    name: "title",
                    label: "Title",
                    type: "string",
                    isTitle: true,
                    required: true,
                  },
                  {
                    name: "icon",
                    label: "Icon",
                    type: "image",
                  },
                ],
              },

            ],
          },
          {
            name: "contracting_services",
            label: "Contracting Services Section",

            fields: [
              {
                name: "services",
                label: "Contracting Services List",
                list: true,
                type: "object",
                ui: {
                  itemProps: (item) => {
                    return { label: item?.name };
                  },
                },
                fields: [
                  {
                    name: "name",
                    label: "File name",
                    description: "ملاحظة هامة: يجب أن يطابق هذا الحقل اسم الملف الخاص بالمشروع وليس اسم المشروع",
                    type: "string",
                    isTitle: true,
                    required: true,
                  },
                  {
                    name: "description",
                    label: "Service Description(Optional)",
                    type: "string",
                  },
                  {
                    name: "icon",
                    label: "Button Icon",
                    type: "image",
                  },
                  {
                    name: "subServices",
                    label: "Service Pictures & Details",
                    type: "object",
                    list: true,
                    ui: {
                      itemProps: (item) => {
                        return { label: item?.name };
                      },
                    },
                    fields: [
                      {
                        name: "name",
                        label: "Image Label",
                        type: "string",
                        isTitle: true,
                        required: true,
                      },
                      {
                        name: "image",
                        label: "Image",
                        type: "image",
                      },
                    ],
                  },

                ],
              }
            ],
          },
        ],
      },
      {
        name: "home_ar",
        label: "الصفحة الرئيسية",
        path: "data/ar/home",
        format: "yaml",
        templates: [
          {
            name: "about",
            label: "قسم 'من نحن'",
            fields: [
              {
                name: "sectionTitle",
                label: "العنوان",
                type: "string",
              },
              {
                type: "image",
                name: "image",
                label: "الصورة",
              },
              {
                name: "firstParagraph",
                label: "المقطع النصي الأول",
                type: "rich-text",
              },
              {
                name: "secondParagraph",
                label: "المقطع النصي الثاني",
                type: "rich-text",
              },
            ],
          },
          {
            name: "intro",
            label: "سلايدات",
            fields: [
              {
                name: "items",
                label: "العناصر",
                type: "object",
                list: true,

                templates: [
                  {
                    name: "serviceSlide",
                    label: "Service Slide",
                    ui: {
                      itemProps: (item) => {
                        return { label: item?.title };
                      },
                    },
                    fields: [
                      {
                        type: "string",
                        name: "title",
                        label: "العنوان الرئيسي",
                      },
                      {
                        type: "string",
                        name: "subtitle",
                        label: "العنوان الفرعي",
                      },
                      {
                        type: "image",
                        name: "image",
                        label: "صورة الخلفية",
                      },
                      {
                        name: "sectionLink",
                        label: "قسم الخدمات في الصفحة الرئيسية",
                        type: "string",
                        list: true,
                        options: [
                          {
                            value: "#contracting-services",
                            label: "General Contracting Section"
                          }, {
                            value: "#supply-trade-services",
                            label: "Supply & trade section"
                          }
                        ]
                      },
                      {
                        type: "string",
                        name: "learnMoreLink",
                        label: "رابط صفحة الخدمة",
                        description: "متبوعاً باسم الخدمة - يُملأ فقط في حال وجود ملف يحمل نفس الاسم  'services/'",
                      },
                    ],
                  },
                  {
                    name: "projectSlide",
                    label: "Project Slide",
                    ui: {
                      itemProps: (item) => {
                        return { label: item?.title };
                      },
                    },
                    fields: [
                      {
                        type: "string",
                        name: "title",
                        label: "العنوان الرئيسي",
                      },
                      {
                        type: "string",
                        name: "subtitle",
                        label: "العنوان الفرعي",
                      },
                      {
                        type: "image",
                        name: "image",
                        label: "صورة الخلفية",
                      },

                      {
                        type: "string",
                        name: "projectLink",
                        label: "رابط صفحة المشروع",
                        description: "The link to project specific page",
                      },

                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "supply_trade_services",
            label: "قسم خدمات التجارة والتوريد",
            fields: [
              {
                name: "title",
                label: "العنوان الرئيسي",
                type: "string",
                isTitle: true,
                required: true,
              },
              {
                name: "description",
                label: "Description",
                type: "string",
              },
              {
                name: "backgroundImage",
                label: "صورة الخلفية",
                type: "image",
              },
              {
                name: "subServices",
                label: "تفاصيل الخدمات",
                type: "object",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.title };
                  },
                },
                fields: [
                  {
                    name: "title",
                    label: "الاسم",
                    type: "string",
                    isTitle: true,
                    required: true,
                  },
                  {
                    name: "icon",
                    label: "الأيقونة",
                    type: "image",
                  },
                ],
              },

            ],
          },
          {
            name: "contracting_services",
            label: "قسم خدمات المقاولات العامة",
            ui: {
              itemProps: (item) => {
                return { label: "خدمات المقاولات العامة" };
              },
            },
            fields: [
              {
                name: "services",
                label: "قائمة الخدمات",
                list: true,
                type: "object",
                ui: {
                  itemProps: (item) => {
                    return { label: item?.name };
                  },
                },
                fields: [
                  {
                    name: "name",
                    label: "اسم ملف المشروع",
                    description: "ملاحظة هامة: يجب أن يطابق هذا الحقل اسم الملف الخاص بالمشروع وليس اسم المشروع",
                    type: "string",
                    isTitle: true,
                    required: true,
                  },
                  {
                    name: "description",
                    label: "لمحة عن الخدمة(اختياري)",
                    type: "string",
                  },
                  {
                    name: "icon",
                    label: "الأيقونة",
                    type: "image",
                  },
                  {
                    name: "subServices",
                    label: "الصور وتفاصيل الخدمة",
                    type: "object",
                    list: true,
                    ui: {
                      itemProps: (item) => {
                        return { label: item?.name };
                      },
                    },
                    fields: [
                      {
                        name: "name",
                        label: "عنوان الصورة",
                        type: "string",
                        isTitle: true,
                        required: true,
                      },
                      {
                        name: "image",
                        label: "الصورة",
                        type: "image",
                      },
                    ],
                  },

                ],
              }
            ],
          },
        ],
      },
      {
        name: "partners",
        label: "Partners",
        path: "data",
        format: "yaml",
        match: {
          include: 'partners',
        },
        fields: [
          {
            type: 'object',
            name: "slides",
            label: "Slides",
            list: true,
            fields: [
              {
                type: 'object',
                name: "items",
                label: "Slide",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.name };
                  },
                },
                fields: [
                  {
                    type: "string",
                    name: "name",
                    isTitle: true,
                    required: true,
                    label: "Image title",
                  },
                  {
                    type: "image",
                    name: "img",
                    label: "Image",
                  },
                  {
                    type: "boolean",
                    name: "isLarge",
                    label: "Is A Large Image - حجم الصورة كبير",
                    description: "Specifies if the image should be displayed as a big image - ",

                  },
                ],
              }

            ],
          },

        ]
      },
      {
        name: "service",
        label: "services",
        path: "content/english/services",
        format: 'md',
        match: {
          exclude: '_index'
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "image",
            name: "bannerImage",
            required: true,
            label: "Thumbnail",
          },
          {
            type: 'rich-text',
            label: 'Service Details',
            name: 'body',
            isBody: true,
          },
        ],
      },
      {
        name: "contact_info",
        label: "Contact Info",
        path: "data/en",
        format: "yaml",
        match: {
          include: 'contact_info',
        },
        fields: [
          {
            name: "socials",
            label: "Social Media Accounts",
            type: "object",

            fields: [
              {
                name: "enable",
                label: "Is Enabled",
                type: "boolean",
              },
              {
                name: "items",
                label: "Accounts",
                type: "object",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.desc };
                  },
                },
                fields: [
                  {
                    name: "link",
                    label: "Link",
                    type: "string",
                  },
                  {
                    name: "icon",
                    label: "Icon",
                    type: "image",
                  },
                  {
                    name: "desc",
                    label: "Description",
                    type: "string",
                  },
                ],
              }
            ],
          },
          {
            name: "ksaOffices",
            label: "Our Offices in KSA",
            type: "object",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.officeName };
              },
            },
            fields: [
              {
                name: "officeName",
                label: "Office Name",
                type: "string",
              },
              {
                name: "phoneNumber",
                label: "Phone Number",
                type: "string",
              },
              {
                name: "address",
                label: "Address",
                type: "string",
              }, {
                name: "locationOnMap",
                label: "GoogleMaps link",
                type: "string",
              },
              {
                name: "POBox",
                label: "P.O. Box",
                type: "string",
              }
            ],
          },
          {
            name: "germanyOffices",
            label: "Our Offices in Germany",
            type: "object",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.officeName };
              },
            },
            fields: [
              {
                name: "officeName",
                label: "Office Name",
                type: "string",
              },
              {
                name: "phoneNumber",
                label: "Phone Number",
                type: "string",
              },
              {
                name: "address",
                label: "Address",
                type: "string",
              }, {
                name: "locationOnMap",
                label: "GoogleMaps link",
                type: "string",
              },
              {
                name: "POBox",
                label: "P.O. Box",
                type: "string",
              }
            ],
          },
          {
            name: "contactPage",
            label: "Contact Us Page",
            type: "object",
            fields: [
              {
                name: "subtitle",
                type: "string",
                label: "Subtitle"
              },
              {
                name: "image",
                type: "image",
                label: "Background image"
              },
              {
                name: "contactForm",
                type: "object",
                label: "Contact Form Section",
                fields: [
                  {
                    name: "image",
                    type: "image",
                    label: "Side image"
                  },
                  {
                    name: "title",
                    type: "string",
                    label: "Section Title"
                  },
                  {
                    name: "subtitle",
                    type: "string",
                    label: "Section Subtitle"
                  },
                ],
              },
            ],
          },
        ],

      },
      {
        name: "services",
        label: "الخدمات",
        path: "content/arabic/services",
        match: {
          exclude: '_index'
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "image",
            name: "bannerImage",
            required: true,
            label: "Page Header Image",
          },
          {
            type: 'rich-text',
            label: 'Service Details',
            name: 'body',
            isBody: true,
          },
        ],
      },
      {
        name: "contact_info_ar",
        label: "معلومات التواصل",
        path: "data/ar",
        format: "yaml",
        match: {
          include: 'contact_info',
        },
        fields: [
          {
            name: "socials",
            label: "حسابات التواصل الاجتماعي",
            type: "object",

            fields: [
              {
                name: "enable",
                label: "Is Enabled",
                type: "boolean",
              },
              {
                name: "items",
                label: "Accounts",
                type: "object",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.desc };
                  },
                },
                fields: [
                  {
                    name: "link",
                    label: "Link",
                    type: "string",
                  },
                  {
                    name: "icon",
                    label: "Icon",
                    type: "image",
                  },
                  {
                    name: "desc",
                    label: "Description",
                    type: "string",
                  },
                ],
              }
            ],
          },
          {
            name: "ksaOffices",
            label: "مكاتبنا في السعودية",
            type: "object",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.officeName };
              },
            },
            fields: [
              {
                name: "officeName",
                label: "الاسم",
                type: "string",
              },
              {
                name: "phoneNumber",
                label: "رقم الهاتف",
                type: "string",
              },
              {
                name: "address",
                label: "العنوان",
                type: "string",
              }, {
                name: "locationOnMap",
                label: "GoogleMaps رابط الموقع على",
                type: "string",
              },
              {
                name: "POBox",
                label: "رقم صندوق مكتب البريد",
                type: "string",
              },
            ],
          },
          {
            name: "germanyOffices",
            label: "مكاتبنا في ألمانيا",
            type: "object",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.officeName };
              },
            },
            fields: [
              {
                name: "officeName",
                label: "الاسم",
                type: "string",
              },
              {
                name: "phoneNumber",
                label: "رقم الهاتف",
                type: "string",
              },
              {
                name: "address",
                label: "العنوان",
                type: "string",
              }, {
                name: "locationOnMap",
                label: "GoogleMaps رابط الموفع على",
                type: "string",
              },
              {
                name: "POBox",
                label: "رقم صندوق مكتب البريد",
                type: "string",
              },
            ],
          },
          {
            name: "contactPage",
            label: "صفحة التواصل",
            type: "object",
            fields: [
              {
                name: "image",
                type: "image",
                label: "صورة الخلفية"
              },
              {
                name: "subtitle",
                type: "string",
                label: "نص ثانوي"
              },
              {
                name: "contactForm",
                type: "object",
                label: "قسم استمارة التواصل",
                fields: [
                  {
                    name: "image",
                    type: "image",
                    label: "الصورة الجانبية"
                  },
                  {
                    name: "title",
                    type: "string",
                    label: "العنوان الرئيسي"
                  },
                  {
                    name: "subtitle",
                    type: "string",
                    label: "التفاصيل"
                  },
                ],
              },
            ],
          }
        ],
      },
      {
        name: "news",
        label: "Our News",
        path: "data/en",
        match: {
          include: 'news'
        },
        format: "yaml",
        fields: [
          {
            name: "enable",
            label: "Show News Section",
            type: "boolean",
          },
          {
            name: "sectionTitle",
            label: "Section Title",
            type: "string",
          },
          {
            name: "items",
            label: "Items",
            list: true,
            type: "object",
            ui: {
              itemProps: (item) => {
                return { label: item?.title };
              },
            },
            fields: [
              {
                name: "title",
                label: "Title",
                type: "string",
                isTitle: true,
                required: true,
              },
              {
                name: "image",
                label: "Image",
                type: "image",
              },
              {

                name: "content",
                label: "Content",
                type: "rich-text",
              },
            ],
          }
        ],
      }, {
        name: "news_ar",
        label: "أخبارنا",
        path: "data/ar",
        match: {
          include: 'news'
        },
        format: "yaml",
        fields: [
          {
            name: "sectionTitle",
            label: "عنوان قسم الأخبار",
            type: "string",
          },
          {
            name: "enable",
            label: "إظهار قسم الأخبار",
            type: "boolean",
          },
          {
            name: "items",
            label: "قائمة الأخبار",
            list: true,
            type: "object",
            ui: {
              itemProps: (item) => {
                return { label: item?.title };
              },
            },
            fields: [
              {
                name: "title",
                label: "العنوان",
                type: "string",
                isTitle: true,
                required: true,
              },
              {
                name: "image",
                label: "صورة الخبر",
                type: "image",
              },
              {

                name: "content",
                label: "التفاصيل",
                type: "rich-text",
              },
            ],
          }
        ],
      },
      {
        name: "project",
        label: "projects",
        path: "content/english/projects",
        format: 'md',
        match: {
          exclude: '_index'
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "Location",
            label: "Location",
          },
          {
            type: "object",
            name: "projectDesc",
            label: "Work Description",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.ProvidedWork };
              },
            },
            fields: [
              {
                name: "ProvidedWork",
                type: "string",
                label: "Provided work",
              }
            ],
          },
          {
            type: "string",
            name: "services",
            label: "Provided Services",
            list: true,
          },
        ],
      },
      {
        name: "projects_imgs",
        label: "صور المشاريع - Projects Photos",
        path: "data",
        format: 'yaml',
        match: {
          include: 'projects_imgs'
        },
        fields: [
          {
            name: "list",
            label: "Projects List",
            type: 'object',
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title };
              },
            },
            fields: [
              {
                name: "title",
                label: "الاسم",
                type: "string",
                isTitle: true,
                required: true,
                description: "ملاحظة هامة: يجب أن يطابق هذا الحقل اسم الملف الخاص بالمشروع وليس اسم المشروع",
              },
              {
                name: "thumbnailImage",
                label: "الصورة المصغرة",
                type: "image",
                description: "الصورة الأساسية"
              },
              {
                type: "image",
                name: "images",
                label: "صور المشروع",
                list: true,
              },
            ],
          }
        ],
      },
      {
        name: "project_ar",
        label: "المشاريع",
        path: "content/arabic/projects",
        format: 'md',
        match: {
          exclude: '_index'
        },
        fields: [

          {
            type: "string",
            name: "title",
            label: "الاسم",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "Location",
            label: "الموقع",
          },
          {
            type: "object",
            name: "projectDesc",
            label: "تفاصيل العمل المنجز",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.ProvidedWork };
              },
            },
            fields: [
              {
                name: "ProvidedWork",
                type: "string",
                label: "العنوان",
              }
            ],
          },
          {
            type: "string",
            name: "services",
            label: "الخدمات",
            list: true,
            description: "قائمة بالخدمات المرتبطة بهذا المشروع - وهي اسم الملف الخاص بالخدمة",
          },

        ],
      },
      {
        name: "about_page_ar",
        label: "صفحة من نحن",
        path: "data/ar",
        format: 'yaml',
        match: {
          include: 'about_page'
        },
        fields: [
          {
            name: "introImage",
            type: "image",
            label: "صورة المقدمة",
          },
          {
            name: "sections",
            type: "object",
            label: "الأقسام",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title };
              },
            },
            fields: [
              {
                name: "title",
                type: "string",
                label: "العنوان على الصورة",
              },
              {
                name: "image",
                type: "image",
                label: "صورة القسم",
              },
              {
                name: "isDarkBackground",
                type: "boolean",
                label: "لون داكن للقسم",
              },
              {

                name: "paragraphs",
                type: "object",
                list: true,
                label: "المقاطع النصية",
                ui: {
                  itemProps: (item) => {
                    return { label: item?.title };
                  },
                },
                fields: [
                  {
                    name: "title",
                    type: "string",
                    label: "عنوان المقطع",
                  },
                  {
                    name: "content",
                    type: "rich-text",
                    label: "محتوى المقطع",
                  },
                ],
              }
            ],

          },

          {
            name: "statements",
            type: "object",
            label: "قسم أسس الشركة",
            fields: [
              {
                name: "sectionTitle",
                type: "string",
                label: "العنوان الرئيسي",
              },
              {
                name: "list",
                type: 'object',
                list: true,
                label: 'العناصر',
                ui: {
                  itemProps: (item) => {
                    return { label: item?.title };
                  },
                },
                fields: [
                  {
                    name: "title",
                    type: "string",
                    label: "الاسم",
                  },
                  {
                    name: "content",
                    type: "string",
                    label: "النص",
                  },
                ]
              }
            ],
          },
        ],
      },
      {
        name: "about_page",
        label: "About Us Page",
        path: "data/en",
        format: 'yaml',
        match: {
          include: 'about_page'
        },
        fields: [
          {
            name: "introImage",
            type: "image",
            label: "Intro background image",
          },
          {
            name: "sections",
            type: "object",
            label: "Page Sections",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.title };
              },
            },
            fields: [
              {
                name: "title",
                type: "string",
                label: "Title on Image",
              },
              {
                name: "image",
                type: "image",
                label: "Section image",
              },
              {
                name: "isDarkBackground",
                type: "boolean",
                label: "Have a dark background color",
              },
              {

                name: "paragraphs",
                type: "object",
                list: true,
                label: "Section Paragraphs",

                fields: [
                  {

                    name: "title",
                    type: "string",
                    label: "Paragraph title",
                  },
                  {
                    name: "content",
                    type: "string",
                    label: "Paragraph Content",
                  },
                ],
              }
            ],

          },
          {
            name: "statements",
            type: "object",
            label: "Company Statemnts",
            fields: [
              {
                name: "sectionTitle",
                type: "string",
                label: "Section Title",
              },
              {
                name: "list",
                type: 'object',
                list: true,
                label: 'Items',
                ui: {
                  itemProps: (item) => {
                    return { label: item?.title };
                  },
                },
                fields: [
                  {
                    name: "title",
                    type: "string",
                    label: "Title",
                  },
                  {
                    name: "content",
                    type: "string",
                    label: "Statement Text",
                  },
                ],
              },
            ],
          },
        ],
      }
    ],
  },
});
