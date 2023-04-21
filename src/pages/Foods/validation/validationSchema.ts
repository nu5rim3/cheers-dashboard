import * as yup from "yup";

const FILE_SIZE = 160 * 1024;
const SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/gif",
  "image/png"
];

const validationsForm = yup.object().shape({
    name: yup.string().required("Required"),
    description: yup.string().required("Required"),
    image: yup
    .mixed()
    .required("A file is required")
    // .test(
    //     "required", 
    //     "Please select a file", 
    //     (value: any) => value.size === 0
    // )
    .test(
      "fileSize",
      "File too large",
      (value: any)=> value && value.size <= FILE_SIZE
    )
    .test(
      "fileFormat",
      "Unsupported Format",
      (value: any) => value && SUPPORTED_FORMATS.includes(value.type)
    ),
    potions: yup.array().min(1).required("Required"),
    serves: yup.number().required("Required"),
    category: yup.array().min(1).required("Required"),
    type: yup.array().min(1).max(1, "Select only one type").required("Required"),
    price: yup.number().required("Required"),
    discountAmount: yup.number().required("Required"),
    origin: yup.array().min(1).required("Required"),
    availability: yup.array().min(1).required("Required"),
    additions: yup.array().min(1).required("Required"),
    isSpecial: yup.boolean(),
    isActive: yup.boolean().required("Required")
})

export default validationsForm;