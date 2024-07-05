import z from 'zod';

const variantsZodSchema = z.object({
  type: z.string({
    required_error: 'Variants Type is required',
  }),
  value: z.string({
    required_error: 'Variants value is required',
  }),
});

const inventoryZodSchema = z.object({
  quantity: z.number().default(0),
  inStock: z.boolean().default(false),
});

const createProductValidationSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
      invalid_type_error: 'Name must be a string',
    })
    .optional(),
  description: z.string({
    required_error: 'Description is required',
    invalid_type_error: 'Description must be a string',
  }),
  price: z.number({
    required_error: 'Price is required',
    invalid_type_error: 'Price must be a Number',
  }),
  category: z.string({
    required_error: 'category is required',
    invalid_type_error: 'Category must be a string',
  }),
  tags: z.array(
    z.string({
      required_error: 'Tags is required',
    }),
  ),
  variants: z.array(variantsZodSchema),
  inventory: inventoryZodSchema,
});

const updateVariantsZodSchema = z.object({
  type: z.string().optional(),
  value: z.string().optional(),
});

const updateInventoryZodSchema = z.object({
  quantity: z.number().default(0).optional(),
  inStock: z.boolean().default(false).optional(),
});

const updateProductValidationSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
      invalid_type_error: 'Name must be a string',
    })
    .optional(),
  description: z
    .string({
      required_error: 'Description is required',
      invalid_type_error: 'Description must be a string',
    })
    .optional(),
  price: z
    .number({
      required_error: 'Price is required',
      invalid_type_error: 'Price must be a Number',
    })
    .optional(),
  category: z
    .string({
      required_error: 'category is required',
      invalid_type_error: 'Category must be a string',
    })
    .optional(),
  tags: z
    .array(
      z.string({
        required_error: 'Tags is required',
      }),
    )
    .optional(),
  variants: z.array(updateVariantsZodSchema).optional(),
  inventory: updateInventoryZodSchema.optional(),
});

export const productValidations = {
  createProductValidationSchema,
  updateProductValidationSchema,
};
