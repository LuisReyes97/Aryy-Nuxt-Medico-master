export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as Tutorial } from '../../components/Tutorial.vue'
export { default as VuetifyLogo } from '../../components/VuetifyLogo.vue'
export { default as Webviewer } from '../../components/Webviewer.vue'
export { default as AppointmentS } from '../../components/appointmentS.vue'
export { default as CodeCountry } from '../../components/codeCountry.vue'
export { default as DatePicker } from '../../components/date-picker.vue'
export { default as HourPicker } from '../../components/hourPicker.vue'
export { default as NewAppointment } from '../../components/newAppointment.vue'
export { default as Note } from '../../components/note.vue'
export { default as Today } from '../../components/today.vue'
export { default as AccountsFormPerfil } from '../../components/accounts/form-perfil.vue'
export { default as DataListAllergies } from '../../components/data-list-medicalrecord/list-allergies.vue'
export { default as DataListFamilyhistory } from '../../components/data-list-medicalrecord/list-familyhistory.vue'
export { default as DataListMedicine } from '../../components/data-list-medicalrecord/list-medicine.vue'
export { default as DataListNonpathologic } from '../../components/data-list-medicalrecord/list-nonpathologic.vue'
export { default as DataListPathologic } from '../../components/data-list-medicalrecord/list-pathologic.vue'
export { default as DataListPreviousMedicine } from '../../components/data-list-medicalrecord/list-previousMedicine.vue'
export { default as DataListVaccination } from '../../components/data-list-medicalrecord/list-vaccination.vue'
export { default as DashboardAssistant } from '../../components/dashboard/DashboardAssistant.vue'
export { default as DashboardCitas } from '../../components/dashboard/DashboardCitas.vue'
export { default as DashboardMarketing } from '../../components/dashboard/DashboardMarketing.vue'
export { default as DashboardCalendar } from '../../components/dashboard/calendar.vue'
export { default as DashboardFormNewPatient } from '../../components/dashboard/formNewPatient.vue'
export { default as DashboardNextConsultation } from '../../components/dashboard/next-consultation.vue'
export { default as EditableFormsEditAllergies } from '../../components/editableForms/editAllergies.vue'
export { default as EditableFormsEditFamilyHistory } from '../../components/editableForms/editFamilyHistory.vue'
export { default as EditableFormsEditMedicine } from '../../components/editableForms/editMedicine.vue'
export { default as EditableFormsEditNonPathologic } from '../../components/editableForms/editNonPathologic.vue'
export { default as EditableFormsEditPathologic } from '../../components/editableForms/editPathologic.vue'
export { default as LoginFormLogin } from '../../components/login/form-Login.vue'
export { default as NewAllergies } from '../../components/newInfoForms/newAllergies.vue'
export { default as NewFamilyHistory } from '../../components/newInfoForms/newFamilyHistory.vue'
export { default as NewNonPathologic } from '../../components/newInfoForms/newNonPathologic.vue'
export { default as NewPathologic } from '../../components/newInfoForms/newPathologic.vue'
export { default as NewVaccination } from '../../components/newInfoForms/newVaccination.vue'
export { default as TableList } from '../../components/table/table-list.vue'
export { default as ScheduleChips } from '../../components/schedule/scheduleChips.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
