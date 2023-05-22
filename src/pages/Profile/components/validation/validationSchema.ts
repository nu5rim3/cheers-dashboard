import * as yup from 'yup';

const FILE_SIZE = 160 * 1024;
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];

const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

const validationsForm = yup.object().shape({
    name: yup.string().required('Required'),
    description: yup.string().required('Required'),
    type: yup.array().min(1).required('Required'),
    contact: yup.string().matches(phoneRegex, 'Invalid phone').required('Phone is required'),
    email: yup.string().email().required('Required'),
    website: yup.string().required('Required'),
    location: yup.string().required('Required'),
    paymenentOption: yup.array().min(1).required('Required'),
    dressCode: yup.array().min(1).required('Required'),
    cuisines: yup.array().min(1).required('Required'),
    isParking: yup.boolean().required('Required'),
    isAlcohol: yup.boolean().required('Required'),
    isByob: yup.boolean().required('Required'),
    isSmokingArea: yup.boolean().required('Required'),
    isPublicHoliday: yup.boolean().required('Required'),
    openTime: yup.date().nullable().required('Required'),
    closeTime: yup.date().nullable().required('Required'),
    barCloseTime: yup.date(),
    imageLogo: yup
        .mixed()
        .required('A file is required')
        .test('fileSize', 'File too large', (value: any) => value && value.size <= FILE_SIZE)
        .test('fileFormat', 'Unsupported Format', (value: any) => value && SUPPORTED_FORMATS.includes(value.type)),
    imageLocation: yup
        .mixed()
        .required('A file is required')
        .test('fileSize', 'File Size is too large', (value: any) => {
            if (value && value?.length > 0) {
                for (let i = 0; i < value.length; i++) {
                    if (value[i].size > FILE_SIZE) {
                        return false;
                    }
                }
            }
            return true;
        })
        .test('fileType', 'Unsupported File Format', (value: any) => {
            if (value && value.length > 0) {
                for (let i = 0; i < value.length; i++) {
                    if (value[i].type !== 'image/png' && value[i].type !== 'image/jpg' && value[i].type !== 'image/jpeg') {
                        return false;
                    }
                }
            }
            return true;
        }),
    isActive: yup.boolean().required('Required')
});

export default validationsForm;
