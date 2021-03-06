export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Jeremias Alvarez',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/code.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["@/assets/scss/main.scss"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: '~/plugins/i18n.js' },],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/buefy
    ['nuxt-buefy', {
      defaultIconPack: 'fa',
      materialDesignIconsHRef: "https://use.fontawesome.com/releases/v5.4.1/css/all.css"
    }],
    ['@nuxtjs/axios'],
    [
      'nuxt-i18n',
      {
        // vueI18nLoader: true,
        locales: [
          {
            code: 'en',
            name: 'ENG'
          },
          {
            code: 'es',
            name: 'ESP'
          }
        ],
        defaultLocale: 'es',
        vueI18n: {
          fallbackLocale: 'es',
          messages: {
            en: {
              navbar: {
                start: 'Start',
                info: 'About Me',
                dropdown: {
                  projects: 'Projects',
                  profile: 'Profiles & Contact',
                  exp: 'Experience',
                  skills: 'Skills'
                }
              },
              main: {
                title: 'About',
                tabs: {
                  profileTab: {
                    title: 'About Me',
                    location: 'Location',
                    profiles: 'Profiles',
                    education: {
                      title: 'Education',
                      desc: 'Technical Degree in Programming'
                    },
                    cv: {
                      button: 'Download my CV'
                    }
                  },
                  projectsTab: {
                    title: 'Skills & Projects',
                    subtitle: 'projects',
                    labels: {
                      stack: 'Tech Stack',
                      description: 'Description',
                      cardTitle: 'About the Project'
                    },
                    buttons: {
                      more: 'About',
                      githubRepo: 'Github Repository',
                      demo: 'Live Demo'
                    },
                    projects: {
                      todoApp: {
                        title: 'Task Manager - Todo App',
                        description: 'A simple app that allows you to store tasks (todos) in a list, mark them as completed or not completed, edit their title or description and also delete them from the list'
                      },
                      dentistApp: {
                        title: 'Appointment Manager - Dental Office',
                        description: 'Application to manage appointments of a fictitious dental office. The dentist (admin user) can receive appointment requests from patients. These requests can be accepted (an appointment is created) or rejected. The dentist can access a calendar where she can observe all of her upcoming appointments. Appointments can be rescheduled or canceled and patients are notified via e-mail. The dentist can also access the medical history of all patients, and print it. \n Patients can sign up / sign in in the app, request appointments, pay for these appointments (the system includes real payments through the Mercadopago API) and observe their medical history. \n \nThis project was a college assignment / homework.'
                      },
                      portfolio: {
                        title: 'Personal Website',
                        description: 'The website you are currently seeing. I made this to, apart from introducing myself, learn new technologies and frameworks like Nuxt JS and Buefy.'
                      }
                    }
                  },
                  expTab: {
                    title: 'Experience',
                    present: 'present',
                    months: {
                      nov: 'november',
                      mar: 'march'
                    },
                    labels: {
                      backendDev: 'Backend developer',
                      tester: '.NET developer'
                    }
                  }
                }
              },
              other: {
                tooltips: {
                  github: 'Find me on Github',
                  gitlab: 'Find me on Gitlab',
                  linkedin: 'LinkedIn Profile'
                }
              }
            },
            es: {
              navbar: {
                start: 'Inicio',
                info: 'Informaci??n',
                dropdown: {
                  projects: 'Proyectos',
                  profile: 'Perfiles y Contacto',
                  exp: 'Experiencia',
                  skills: 'Aptitudes'
                }
              },
              main: {
                title: 'Informaci??n',
                tabs: {
                  profileTab: {
                    title: 'Perfil',
                    location: 'Ubicaci??n',
                    profiles: 'Perfiles',
                    education: {
                      title: 'Educaci??n',
                      desc: 'Tecnico Universitario en Programaci??n'
                    },
                    cv: {
                      button: 'Descargar mi CV'
                    }
                  },
                  projectsTab: {
                    title: 'Aptitudes y Proyectos',
                    subtitle: 'proyectos',
                    labels: {
                      stack: 'Stack',
                      description: 'Descripci??n',
                      cardTitle: 'Sobre el Proyecto'
                    },
                    buttons: {
                      more: 'Descripci??n',
                      githubRepo: 'Repositorio de Github',
                      demo: 'Demo del Proyecto'
                    },
                    projects: {

                      todoApp: {
                        title: 'Gesti??n de tareas',
                        description: 'Una sencilla aplicaci??n que permite almacenar tareas en una lista, marcalas como completadas o no completadas, editar su informaci??n y tambien eliminarlas de la lista'
                      },
                      dentistApp: {
                        title: 'Consultorio Dental - Gesti??n de Turnos',
                        description: 'Aplicaci??n para gestionar citas de un consultorio dental ficticio. El dentista (usuario administrador) puede recibir solicitudes de citas de los pacientes. Estas solicitudes pueden aceptarse (se crea una cita) o rechazarse. El dentista puede acceder a un calendario donde puede observar todas sus pr??ximas citas. Las citas se pueden reprogramar o cancelar y los pacientes son notificados por correo electr??nico. El dentista tambi??n puede acceder al historial m??dico de todos los pacientes e imprimirlo. \n Los pacientes pueden registrarse / iniciar sesi??n en la aplicaci??n, solicitar citas, pagar estas citas (el sistema incluye pagos reales a trav??s de la API de Mercadopago) y observar su historial m??dico. \n \nEste proyecto fue una asignaci??n / tarea universitaria.'
                      },
                      portfolio: {
                        title: 'Portfolio Personal',
                        description: 'El sitio que estas viendo actualmente. Hecho para, adem??s de presentarme, aprender nuevas tecnolog??as y frameworks como Nuxt JS y Buefy.'
                      }
                    }
                  },
                  expTab: {
                    title: 'Experiencia',
                    present: 'presente',
                    months: {
                      nov: 'noviembre',
                      mar: 'marzo'
                    },
                    labels: {
                      backendDev: 'Desarrollador backend',
                      tester: 'Desarrollador .NET'
                    }
                  }
                }
              },
              other: {
                tooltips: {
                  github: 'Perfil de Github',
                  gitlab: 'Perfil de Gitlab',
                  linkedin: 'Perfil de LinkedIn'
                }
              }
            }
          }
        }
      }
    ]
  ],
  axios: {
    baseURL: 'https://api-portfolio-personal.herokuapp.com/api/v1'
  },

  target: 'static',

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
