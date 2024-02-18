import * as yup from 'yup';

export const problemSchema = yup.object().shape({
   occur_date: yup.date().required('Не может быть пустым'),
   part_number: yup.string().min(11, 'Не менее 11ти символов').max(15).required('Не может быть пустым'),
   part_name: yup.string().min(2, 'Не менее 2х символов').max(100).required('Не может быть пустым'),
   model: yup.string().required('Не может быть пустым'),
   part_type: yup.string().required('Не может быть пустым'),
   problem_code: yup.string().min(5, 'Не менее 5ти символов').max(6).required('Не может быть пустым'),
   problem: yup.string().min(2, 'Не менее 2х символов').max(200).required('Не может быть пустым'),
   defect_qty: yup.number().min(1, 'Не менее 1го символа').max(9999).positive().integer().required('Не может быть пустым'),
   supplier: yup.string().min(2, 'Не менее 2х символов').max(100).required('Не может быть пустым'),
   reason: yup.string().required('Не может быть пустым'),
   temp_cm: yup.string().min(2, 'Не менее 2х символов').max(200),
   temp_cm_date: yup.date(),
   perm_cm: yup.string().min(2, 'Не менее 2х символов').max(200),
   perm_cm_date: yup.date(),
   status: yup.string().required('Не может быть пустым'),
   action: yup.string().required('Не может быть пустым'),
   responsible: yup.string().required('Не может быть пустым'),
   system: yup.string().required('Не может быть пустым'),
   // image_1: yup
   //    .mixed()
   //    .test("FILE_SIZE", "Слишком тяжёлый файл!", (value) => value && value.size < 1024 * 1024)
   //    .test("FILE_TYPE", "Формат не поддерживается!", (value) => value && ['image/png', 'image/jpeg', 'image/jpg'].includes(value.type)),
   // image_2: yup
   //    .mixed()
   //    .test("FILE_SIZE", "Слишком тяжёлый файл!", (value) => value && value.size < 1024 * 1024)
   //    .test("FILE_TYPE", "Формат не поддерживается!", (value) => value && ['image/png', 'image/jpeg', 'image/jpg'].includes(value.type)),
   // image_3: yup
   //    .mixed()
   //    .test("FILE_SIZE", "Слишком тяжёлый файл!", (value) => value && value.size < 1024 * 1024)
   //    .test("FILE_TYPE", "Формат не поддерживается!", (value) => value && ['image/png', 'image/jpeg', 'image/jpg'].includes(value.type))
});