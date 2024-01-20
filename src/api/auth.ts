import { nanoid } from 'nanoid';
import { Credentials } from 'src/declarations/Auth';

type LoginResponse = {
  ok: boolean;
  access_token: string;
};

// simulate the native javascript fetch
const mockedFetcher = async (): Promise<LoginResponse> => {
  const token = nanoid();
  try {
    // Simulate a http response with a delay of 500 milliseconds
    return new Promise(res => setTimeout(() => res({ ok: true, access_token: token }), 500));
  } catch (error) {
    // In our example this not going to happened never.
    // I have created this in order to be as close as possible to a real scenario
    console.error('Error in mockedFetcher:', error);
    return new Promise((_res, rej) => rej({ ok: false, error }));
  }
};

export const login = async (credentials: Credentials) => {
  console.info('Credentials: ', credentials);
  return mockedFetcher();
};
