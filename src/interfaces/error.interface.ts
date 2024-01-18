export type ValidationError = {
  path: string | number;
  message: string;
};

export type ValidationErrorResponse = {
  success: false;
  message: string;
  errors: ValidationError[];
};
