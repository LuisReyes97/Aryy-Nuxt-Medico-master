import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _69db00c4 = () => interopDefault(import('../pages/carrusel.vue' /* webpackChunkName: "pages/carrusel" */))
const _39eb8f9f = () => interopDefault(import('../pages/generarPDF.vue' /* webpackChunkName: "pages/generarPDF" */))
const _30dfdeee = () => interopDefault(import('../pages/imagen.vue' /* webpackChunkName: "pages/imagen" */))
const _efb46eb6 = () => interopDefault(import('../pages/loandig-page.vue' /* webpackChunkName: "pages/loandig-page" */))
const _50d19c84 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _68600e85 = () => interopDefault(import('../pages/logout.vue' /* webpackChunkName: "pages/logout" */))
const _74ac4049 = () => interopDefault(import('../pages/patients.vue' /* webpackChunkName: "pages/patients" */))
const _72989e54 = () => interopDefault(import('../pages/patients/list.vue' /* webpackChunkName: "pages/patients/list" */))
const _5b8fa918 = () => interopDefault(import('../pages/pruebaComponente.vue' /* webpackChunkName: "pages/pruebaComponente" */))
const _4809459e = () => interopDefault(import('../pages/account-settings/AccountSettingsAccount.vue' /* webpackChunkName: "pages/account-settings/AccountSettingsAccount" */))
const _04b7f79c = () => interopDefault(import('../pages/accounts/new.vue' /* webpackChunkName: "pages/accounts/new" */))
const _0172d959 = () => interopDefault(import('../pages/auth/formLogin.vue' /* webpackChunkName: "pages/auth/formLogin" */))
const _0447b086 = () => interopDefault(import('../pages/auth/login.vue' /* webpackChunkName: "pages/auth/login" */))
const _d9caef78 = () => interopDefault(import('../pages/auth/passwordForget.vue' /* webpackChunkName: "pages/auth/passwordForget" */))
const _dc07df78 = () => interopDefault(import('../pages/calendario/calendario.vue' /* webpackChunkName: "pages/calendario/calendario" */))
const _5a2d14b1 = () => interopDefault(import('../pages/calendario/dayView.vue' /* webpackChunkName: "pages/calendario/dayView" */))
const _16283950 = () => interopDefault(import('../pages/calendario/month.vue' /* webpackChunkName: "pages/calendario/month" */))
const _30a12d54 = () => interopDefault(import('../pages/calendario/week.vue' /* webpackChunkName: "pages/calendario/week" */))
const _5415d5fc = () => interopDefault(import('../pages/settings/account.vue' /* webpackChunkName: "pages/settings/account" */))
const _389ca02c = () => interopDefault(import('../pages/settings/delete.vue' /* webpackChunkName: "pages/settings/delete" */))
const _43a1bae3 = () => interopDefault(import('../pages/settings/menuSettings.vue' /* webpackChunkName: "pages/settings/menuSettings" */))
const _c523b412 = () => interopDefault(import('../pages/settings/notifications.vue' /* webpackChunkName: "pages/settings/notifications" */))
const _10112464 = () => interopDefault(import('../pages/settings/settings.vue' /* webpackChunkName: "pages/settings/settings" */))
const _8551d550 = () => interopDefault(import('../pages/settings/theme.vue' /* webpackChunkName: "pages/settings/theme" */))
const _307a4b06 = () => interopDefault(import('../pages/accounts/edit/account.vue' /* webpackChunkName: "pages/accounts/edit/account" */))
const _ea9bd3f6 = () => interopDefault(import('../pages/accounts/edit/accountMenu.vue' /* webpackChunkName: "pages/accounts/edit/accountMenu" */))
const _3820192c = () => interopDefault(import('../pages/accounts/edit/general-info.vue' /* webpackChunkName: "pages/accounts/edit/general-info" */))
const _bd56a03e = () => interopDefault(import('../pages/accounts/edit/medical-info.vue' /* webpackChunkName: "pages/accounts/edit/medical-info" */))
const _1813c7dc = () => interopDefault(import('../pages/accounts/edit/medicalProfile-info.vue' /* webpackChunkName: "pages/accounts/edit/medicalProfile-info" */))
const _1fed81c0 = () => interopDefault(import('../pages/accounts/edit/planner-info.vue' /* webpackChunkName: "pages/accounts/edit/planner-info" */))
const _4e62e3e3 = () => interopDefault(import('../pages/auth/register/register.vue' /* webpackChunkName: "pages/auth/register/register" */))
const _986aea20 = () => interopDefault(import('../pages/medical-record/cards/basic-info.vue' /* webpackChunkName: "pages/medical-record/cards/basic-info" */))
const _b7307c68 = () => interopDefault(import('../pages/medical-record/cards/consultation.vue' /* webpackChunkName: "pages/medical-record/cards/consultation" */))
const _50ae5590 = () => interopDefault(import('../pages/medical-record/cards/medical-record.vue' /* webpackChunkName: "pages/medical-record/cards/medical-record" */))
const _1ca410ba = () => interopDefault(import('../pages/medical-record/cards/previous.vue' /* webpackChunkName: "pages/medical-record/cards/previous" */))
const _7aa6ed47 = () => interopDefault(import('../pages/accounts/edit/MedicalProfileComponents/idMed.vue' /* webpackChunkName: "pages/accounts/edit/MedicalProfileComponents/idMed" */))
const _1bd19ca6 = () => interopDefault(import('../pages/accounts/edit/MedicalProfileComponents/illnes.vue' /* webpackChunkName: "pages/accounts/edit/MedicalProfileComponents/illnes" */))
const _2920adfa = () => interopDefault(import('../pages/accounts/edit/MedicalProfileComponents/menuMed.vue' /* webpackChunkName: "pages/accounts/edit/MedicalProfileComponents/menuMed" */))
const _0e4e76b8 = () => interopDefault(import('../pages/accounts/edit/MedicalProfileComponents/services.vue' /* webpackChunkName: "pages/accounts/edit/MedicalProfileComponents/services" */))
const _463fe05e = () => interopDefault(import('../pages/accounts/edit/MedicalProfileViews/idMed.vue' /* webpackChunkName: "pages/accounts/edit/MedicalProfileViews/idMed" */))
const _51fb3f3a = () => interopDefault(import('../pages/accounts/edit/MedicalProfileViews/illnes.vue' /* webpackChunkName: "pages/accounts/edit/MedicalProfileViews/illnes" */))
const _b82b5de6 = () => interopDefault(import('../pages/accounts/edit/MedicalProfileViews/menuMed.vue' /* webpackChunkName: "pages/accounts/edit/MedicalProfileViews/menuMed" */))
const _6528cfee = () => interopDefault(import('../pages/accounts/edit/MedicalProfileViews/services.vue' /* webpackChunkName: "pages/accounts/edit/MedicalProfileViews/services" */))
const _1e2879bf = () => interopDefault(import('../pages/accounts/edit/PersonalProfile/changeEmail.vue' /* webpackChunkName: "pages/accounts/edit/PersonalProfile/changeEmail" */))
const _707f0048 = () => interopDefault(import('../pages/accounts/edit/PersonalProfile/menuPersonal.vue' /* webpackChunkName: "pages/accounts/edit/PersonalProfile/menuPersonal" */))
const _53c7c1b2 = () => interopDefault(import('../pages/accounts/edit/PersonalProfile/subscription-form.vue' /* webpackChunkName: "pages/accounts/edit/PersonalProfile/subscription-form" */))
const _177fa0ae = () => interopDefault(import('../pages/accounts/edit/PersonalProfile/tax-data.vue' /* webpackChunkName: "pages/accounts/edit/PersonalProfile/tax-data" */))
const _76bcce16 = () => interopDefault(import('../pages/accounts/edit/plannerViews/bussinesHour.vue' /* webpackChunkName: "pages/accounts/edit/plannerViews/bussinesHour" */))
const _3de9cd1a = () => interopDefault(import('../pages/accounts/edit/plannerViews/editHour.vue' /* webpackChunkName: "pages/accounts/edit/plannerViews/editHour" */))
const _e0ec4c42 = () => interopDefault(import('../pages/accounts/edit/plannerViews/facilityCard.vue' /* webpackChunkName: "pages/accounts/edit/plannerViews/facilityCard" */))
const _0538ccd2 = () => interopDefault(import('../pages/accounts/edit/plannerViews/menuPlanner.vue' /* webpackChunkName: "pages/accounts/edit/plannerViews/menuPlanner" */))
const _fe95daf2 = () => interopDefault(import('../pages/accounts/edit/plannerViews/newFacility.vue' /* webpackChunkName: "pages/accounts/edit/plannerViews/newFacility" */))
const _570c54c8 = () => interopDefault(import('../pages/accounts/edit/plannerViews/schedule-info.vue' /* webpackChunkName: "pages/accounts/edit/plannerViews/schedule-info" */))
const _65897594 = () => interopDefault(import('../pages/auth/register/registerViews/patientView.vue' /* webpackChunkName: "pages/auth/register/registerViews/patientView" */))
const _794406ce = () => interopDefault(import('../pages/auth/register/registerViews/registerPatient.vue' /* webpackChunkName: "pages/auth/register/registerViews/registerPatient" */))
const _67e14690 = () => interopDefault(import('../pages/auth/register/registerViews/specialistRegister.vue' /* webpackChunkName: "pages/auth/register/registerViews/specialistRegister" */))
const _4c405a5a = () => interopDefault(import('../pages/auth/register/registerViews/SpecialistView.vue' /* webpackChunkName: "pages/auth/register/registerViews/SpecialistView" */))
const _282a60ec = () => interopDefault(import('../pages/auth/register/registerViews/token.js' /* webpackChunkName: "pages/auth/register/registerViews/token" */))
const _133c4dbc = () => interopDefault(import('../pages/medical-record/cards/medical-records/allergies.vue' /* webpackChunkName: "pages/medical-record/cards/medical-records/allergies" */))
const _1a4ed352 = () => interopDefault(import('../pages/medical-record/cards/medical-records/family-history.vue' /* webpackChunkName: "pages/medical-record/cards/medical-records/family-history" */))
const _4ea12634 = () => interopDefault(import('../pages/medical-record/cards/medical-records/medicine.vue' /* webpackChunkName: "pages/medical-record/cards/medical-records/medicine" */))
const _df91d8c2 = () => interopDefault(import('../pages/medical-record/cards/medical-records/non-pathologic-antecedents.vue' /* webpackChunkName: "pages/medical-record/cards/medical-records/non-pathologic-antecedents" */))
const _7b08f28f = () => interopDefault(import('../pages/medical-record/cards/medical-records/others.vue' /* webpackChunkName: "pages/medical-record/cards/medical-records/others" */))
const _7c3afc07 = () => interopDefault(import('../pages/medical-record/cards/medical-records/others/customized-questionnaire.vue' /* webpackChunkName: "pages/medical-record/cards/medical-records/others/customized-questionnaire" */))
const _35cfd34a = () => interopDefault(import('../pages/medical-record/cards/medical-records/others/gynecological-history.vue' /* webpackChunkName: "pages/medical-record/cards/medical-records/others/gynecological-history" */))
const _0a0f53e7 = () => interopDefault(import('../pages/medical-record/cards/medical-records/others/perinatal-history.vue' /* webpackChunkName: "pages/medical-record/cards/medical-records/others/perinatal-history" */))
const _5650ccb3 = () => interopDefault(import('../pages/medical-record/cards/medical-records/others/postnatal-history.vue' /* webpackChunkName: "pages/medical-record/cards/medical-records/others/postnatal-history" */))
const _50e28e72 = () => interopDefault(import('../pages/medical-record/cards/medical-records/others/psychiatric-history.vue' /* webpackChunkName: "pages/medical-record/cards/medical-records/others/psychiatric-history" */))
const _2db54e9f = () => interopDefault(import('../pages/medical-record/cards/medical-records/pathologic-antecedents.vue' /* webpackChunkName: "pages/medical-record/cards/medical-records/pathologic-antecedents" */))
const _4796969d = () => interopDefault(import('../pages/medical-record/cards/medical-records/previuos-medication.vue' /* webpackChunkName: "pages/medical-record/cards/medical-records/previuos-medication" */))
const _612b94c9 = () => interopDefault(import('../pages/medical-record/cards/medical-records/vaccination.vue' /* webpackChunkName: "pages/medical-record/cards/medical-records/vaccination" */))
const _471d75b4 = () => interopDefault(import('../pages/medical-record/cards/odontograma/odontograma.vue' /* webpackChunkName: "pages/medical-record/cards/odontograma/odontograma" */))
const _80e8641a = () => interopDefault(import('../pages/accounts/edit/plannerViews/edit/_editFacility.vue' /* webpackChunkName: "pages/accounts/edit/plannerViews/edit/_editFacility" */))
const _fc8779c2 = () => interopDefault(import('../pages/accounts/edit/plannerViews/_watchFacility.vue' /* webpackChunkName: "pages/accounts/edit/plannerViews/_watchFacility" */))
const _7553dd29 = () => interopDefault(import('../pages/medical-record/view/_patient.vue' /* webpackChunkName: "pages/medical-record/view/_patient" */))
const _c43cfe4c = () => interopDefault(import('../pages/medical-record/_medicalRecord.vue' /* webpackChunkName: "pages/medical-record/_medicalRecord" */))
const _0def8ea7 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/carrusel",
    component: _69db00c4,
    name: "carrusel"
  }, {
    path: "/generarPDF",
    component: _39eb8f9f,
    name: "generarPDF"
  }, {
    path: "/imagen",
    component: _30dfdeee,
    name: "imagen"
  }, {
    path: "/loandig-page",
    component: _efb46eb6,
    name: "loandig-page"
  }, {
    path: "/login",
    component: _50d19c84,
    name: "login"
  }, {
    path: "/logout",
    component: _68600e85,
    name: "logout"
  }, {
    path: "/patients",
    component: _74ac4049,
    name: "patients",
    children: [{
      path: "list",
      component: _72989e54,
      name: "patients-list"
    }]
  }, {
    path: "/pruebaComponente",
    component: _5b8fa918,
    name: "pruebaComponente"
  }, {
    path: "/account-settings/AccountSettingsAccount",
    component: _4809459e,
    name: "account-settings-AccountSettingsAccount"
  }, {
    path: "/accounts/new",
    component: _04b7f79c,
    name: "accounts-new"
  }, {
    path: "/auth/formLogin",
    component: _0172d959,
    name: "auth-formLogin"
  }, {
    path: "/auth/login",
    component: _0447b086,
    name: "auth-login"
  }, {
    path: "/auth/passwordForget",
    component: _d9caef78,
    name: "auth-passwordForget"
  }, {
    path: "/calendario/calendario",
    component: _dc07df78,
    name: "calendario-calendario"
  }, {
    path: "/calendario/dayView",
    component: _5a2d14b1,
    name: "calendario-dayView"
  }, {
    path: "/calendario/month",
    component: _16283950,
    name: "calendario-month"
  }, {
    path: "/calendario/week",
    component: _30a12d54,
    name: "calendario-week"
  }, {
    path: "/settings/account",
    component: _5415d5fc,
    name: "settings-account"
  }, {
    path: "/settings/delete",
    component: _389ca02c,
    name: "settings-delete"
  }, {
    path: "/settings/menuSettings",
    component: _43a1bae3,
    name: "settings-menuSettings"
  }, {
    path: "/settings/notifications",
    component: _c523b412,
    name: "settings-notifications"
  }, {
    path: "/settings/settings",
    component: _10112464,
    name: "settings-settings"
  }, {
    path: "/settings/theme",
    component: _8551d550,
    name: "settings-theme"
  }, {
    path: "/accounts/edit/account",
    component: _307a4b06,
    name: "accounts-edit-account"
  }, {
    path: "/accounts/edit/accountMenu",
    component: _ea9bd3f6,
    name: "accounts-edit-accountMenu"
  }, {
    path: "/accounts/edit/general-info",
    component: _3820192c,
    name: "accounts-edit-general-info"
  }, {
    path: "/accounts/edit/medical-info",
    component: _bd56a03e,
    name: "accounts-edit-medical-info"
  }, {
    path: "/accounts/edit/medicalProfile-info",
    component: _1813c7dc,
    name: "accounts-edit-medicalProfile-info"
  }, {
    path: "/accounts/edit/planner-info",
    component: _1fed81c0,
    name: "accounts-edit-planner-info"
  }, {
    path: "/auth/register/register",
    component: _4e62e3e3,
    name: "auth-register-register"
  }, {
    path: "/medical-record/cards/basic-info",
    component: _986aea20,
    name: "medical-record-cards-basic-info"
  }, {
    path: "/medical-record/cards/consultation",
    component: _b7307c68,
    name: "medical-record-cards-consultation"
  }, {
    path: "/medical-record/cards/medical-record",
    component: _50ae5590,
    name: "medical-record-cards-medical-record"
  }, {
    path: "/medical-record/cards/previous",
    component: _1ca410ba,
    name: "medical-record-cards-previous"
  }, {
    path: "/accounts/edit/MedicalProfileComponents/idMed",
    component: _7aa6ed47,
    name: "accounts-edit-MedicalProfileComponents-idMed"
  }, {
    path: "/accounts/edit/MedicalProfileComponents/illnes",
    component: _1bd19ca6,
    name: "accounts-edit-MedicalProfileComponents-illnes"
  }, {
    path: "/accounts/edit/MedicalProfileComponents/menuMed",
    component: _2920adfa,
    name: "accounts-edit-MedicalProfileComponents-menuMed"
  }, {
    path: "/accounts/edit/MedicalProfileComponents/services",
    component: _0e4e76b8,
    name: "accounts-edit-MedicalProfileComponents-services"
  }, {
    path: "/accounts/edit/MedicalProfileViews/idMed",
    component: _463fe05e,
    name: "accounts-edit-MedicalProfileViews-idMed"
  }, {
    path: "/accounts/edit/MedicalProfileViews/illnes",
    component: _51fb3f3a,
    name: "accounts-edit-MedicalProfileViews-illnes"
  }, {
    path: "/accounts/edit/MedicalProfileViews/menuMed",
    component: _b82b5de6,
    name: "accounts-edit-MedicalProfileViews-menuMed"
  }, {
    path: "/accounts/edit/MedicalProfileViews/services",
    component: _6528cfee,
    name: "accounts-edit-MedicalProfileViews-services"
  }, {
    path: "/accounts/edit/PersonalProfile/changeEmail",
    component: _1e2879bf,
    name: "accounts-edit-PersonalProfile-changeEmail"
  }, {
    path: "/accounts/edit/PersonalProfile/menuPersonal",
    component: _707f0048,
    name: "accounts-edit-PersonalProfile-menuPersonal"
  }, {
    path: "/accounts/edit/PersonalProfile/subscription-form",
    component: _53c7c1b2,
    name: "accounts-edit-PersonalProfile-subscription-form"
  }, {
    path: "/accounts/edit/PersonalProfile/tax-data",
    component: _177fa0ae,
    name: "accounts-edit-PersonalProfile-tax-data"
  }, {
    path: "/accounts/edit/plannerViews/bussinesHour",
    component: _76bcce16,
    name: "accounts-edit-plannerViews-bussinesHour"
  }, {
    path: "/accounts/edit/plannerViews/editHour",
    component: _3de9cd1a,
    name: "accounts-edit-plannerViews-editHour"
  }, {
    path: "/accounts/edit/plannerViews/facilityCard",
    component: _e0ec4c42,
    name: "accounts-edit-plannerViews-facilityCard"
  }, {
    path: "/accounts/edit/plannerViews/menuPlanner",
    component: _0538ccd2,
    name: "accounts-edit-plannerViews-menuPlanner"
  }, {
    path: "/accounts/edit/plannerViews/newFacility",
    component: _fe95daf2,
    name: "accounts-edit-plannerViews-newFacility"
  }, {
    path: "/accounts/edit/plannerViews/schedule-info",
    component: _570c54c8,
    name: "accounts-edit-plannerViews-schedule-info"
  }, {
    path: "/auth/register/registerViews/patientView",
    component: _65897594,
    name: "auth-register-registerViews-patientView"
  }, {
    path: "/auth/register/registerViews/registerPatient",
    component: _794406ce,
    name: "auth-register-registerViews-registerPatient"
  }, {
    path: "/auth/register/registerViews/specialistRegister",
    component: _67e14690,
    name: "auth-register-registerViews-specialistRegister"
  }, {
    path: "/auth/register/registerViews/SpecialistView",
    component: _4c405a5a,
    name: "auth-register-registerViews-SpecialistView"
  }, {
    path: "/auth/register/registerViews/token",
    component: _282a60ec,
    name: "auth-register-registerViews-token"
  }, {
    path: "/medical-record/cards/medical-records/allergies",
    component: _133c4dbc,
    name: "medical-record-cards-medical-records-allergies"
  }, {
    path: "/medical-record/cards/medical-records/family-history",
    component: _1a4ed352,
    name: "medical-record-cards-medical-records-family-history"
  }, {
    path: "/medical-record/cards/medical-records/medicine",
    component: _4ea12634,
    name: "medical-record-cards-medical-records-medicine"
  }, {
    path: "/medical-record/cards/medical-records/non-pathologic-antecedents",
    component: _df91d8c2,
    name: "medical-record-cards-medical-records-non-pathologic-antecedents"
  }, {
    path: "/medical-record/cards/medical-records/others",
    component: _7b08f28f,
    name: "medical-record-cards-medical-records-others",
    children: [{
      path: "customized-questionnaire",
      component: _7c3afc07,
      name: "medical-record-cards-medical-records-others-customized-questionnaire"
    }, {
      path: "gynecological-history",
      component: _35cfd34a,
      name: "medical-record-cards-medical-records-others-gynecological-history"
    }, {
      path: "perinatal-history",
      component: _0a0f53e7,
      name: "medical-record-cards-medical-records-others-perinatal-history"
    }, {
      path: "postnatal-history",
      component: _5650ccb3,
      name: "medical-record-cards-medical-records-others-postnatal-history"
    }, {
      path: "psychiatric-history",
      component: _50e28e72,
      name: "medical-record-cards-medical-records-others-psychiatric-history"
    }]
  }, {
    path: "/medical-record/cards/medical-records/pathologic-antecedents",
    component: _2db54e9f,
    name: "medical-record-cards-medical-records-pathologic-antecedents"
  }, {
    path: "/medical-record/cards/medical-records/previuos-medication",
    component: _4796969d,
    name: "medical-record-cards-medical-records-previuos-medication"
  }, {
    path: "/medical-record/cards/medical-records/vaccination",
    component: _612b94c9,
    name: "medical-record-cards-medical-records-vaccination"
  }, {
    path: "/medical-record/cards/odontograma/odontograma",
    component: _471d75b4,
    name: "medical-record-cards-odontograma-odontograma"
  }, {
    path: "/accounts/edit/plannerViews/edit/:editFacility?",
    component: _80e8641a,
    name: "accounts-edit-plannerViews-edit-editFacility"
  }, {
    path: "/accounts/edit/plannerViews/:watchFacility?",
    component: _fc8779c2,
    name: "accounts-edit-plannerViews-watchFacility"
  }, {
    path: "/medical-record/view/:patient?",
    component: _7553dd29,
    name: "medical-record-view-patient"
  }, {
    path: "/medical-record/:medicalRecord?",
    component: _c43cfe4c,
    name: "medical-record-medicalRecord"
  }, {
    path: "/",
    component: _0def8ea7,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
