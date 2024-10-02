import { Page } from '@playwright/test';
import { faker } from '@faker-js/faker';

export const pageFixture = {
  page: undefined as Page,
};

export const dataFixture = {
  customer: {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    zipCode: faker.location.zipCode(),
  },
};
