import { Page } from '@playwright/test';
import { faker } from '@faker-js/faker';

export const pageFixture = {
  page: undefined as Page,
  baseUrl: 'https://www.globalsqa.com/angularJs-protractor/BankingProject/',
};

export const dataFixture = {
  customer: {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    zipCode: faker.location.zipCode(),
  },
};
