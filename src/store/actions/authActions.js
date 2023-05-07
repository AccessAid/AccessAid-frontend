import { createAsyncThunk } from '@reduxjs/toolkit';

// export const login = createAsyncThunk(
//   'auth/login',
//   async (payload, { rejectWithValue }) => {
//     try {
//       const response = await fetch(
//         `${import.meta.env.VITE_API_URL}/auth/login`,
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(payload),
//         },
//       );

//       const data = await response.json();

//       if (response.ok) {
//         return data;
//       }
//       return rejectWithValue({
//         message: "this username don't exist",
//       });
//     } catch (err) {
//       return rejectWithValue(err.message);
//     }
//   },
// );

export const login = createAsyncThunk(
  'auth/login',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await new Promise((resolve, reject) => {
        // Simulando una respuesta asincrónica después de un breve retraso de 1 segundo
        setTimeout(() => {
          // Simulando una respuesta de error
          if (payload.username === 'testuser') {
            resolve({
              ok: false,
              json: () => Promise.resolve({}),
            });
          } else {
            resolve({
              ok: true,
              json: () =>
                Promise.resolve({
                  token: 'Usuario logueado correctamente.',
                }),
            });
          }
        }, 3000);
      });

      const data = await response.json();

      if (response.ok) {
        return data;
      }

      return rejectWithValue({
        message: "this username don't exist",
      });
    } catch (err) {
      // Simulando una respuesta de error
      return rejectWithValue({
        message: 'An error occurred while trying to log in.',
      });
    }
  },
);

// ***********

export const signup = createAsyncThunk(
  'auth/signup',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          body: JSON.stringify(payload),
        },
      );

      const data = await response.json();

      if (response.ok) {
        return data;
      }
      return rejectWithValue({
        message: "This username doesn't exist",
      });
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

// export const signup = createAsyncThunk(
//   'auth/signup',
//   async (payload, { rejectWithValue }) => {
//     try {

//       const response = await new Promise((resolve, reject) => {
//         // Simulando una respuesta asincrónica después de un breve retraso de 1 segundo
//         setTimeout(() => {
//           // Simulando una respuesta de error
//           if (payload.email === 'test@example.com') {
//             resolve({
//               ok: false,
//               json: () =>
//                 Promise.resolve({
//                   message: 'Ya existe una cuenta registrada con este email.',
//                 }),
//             });
//           } else if (payload.username === 'testuser') {
//             resolve({
//               ok: false,
//               json: () =>
//                 Promise.resolve({ message: 'Ya existe este username' }),
//             });
//           } else {
//             resolve({
//               ok: true,
//               json: () =>
//                 Promise.resolve({
//                   message: 'Usuario registrado correctamente.',
//                 }),
//             });
//           }
//         }, 5000);
//       });

//       const data = await response.json();

//       if (response.ok) {
//         return data;
//       }

//       return rejectWithValue(data);
//     } catch (err) {
//       // Simulando una respuesta de error
//       return rejectWithValue({
//         message: 'Ha ocurrido un error al intentar registrarse.',
//       });
//     }
//   },
// );

// export const getUserData = createAsyncThunk(
//   'auth/getUserData',
//   async (payload, { rejectWithValue }) => {
//     try {
//       const response = await fetch(
//         `${import.meta.env.VITE_API_URL}/users/username/${payload.username}`,
//         {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         },
//       );

//       const data = await response.json();

//       if (response.ok) {
//         return data;
//       }
//       return rejectWithValue(data);
//     } catch (err) {
//       return rejectWithValue(err.message);
//     }
//   },
// );

// *************

export const getUserData = createAsyncThunk(
  'auth/getUserData',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await new Promise((resolve, reject) => {
        // Simulando una respuesta asincrónica después de un breve retraso de 1 segundo
        setTimeout(() => {
          // Simulando una respuesta de error
          if (payload.username === 'testuser') {
            resolve({
              ok: false,
              json: () => Promise.resolve({}),
            });
          } else {
            resolve({
              ok: true,
              json: () =>
                Promise.resolve({
                  id: 1,
                  email: 'email@email.com',
                  username: payload,
                }),
            });
          }
        }, 2000); // Reducido el tiempo de espera para el ejemplo
      });

      const data = await response.json();

      if (response.ok) {
        return data;
      }

      return rejectWithValue(data);
    } catch (err) {
      // Simulando una respuesta de error
      return rejectWithValue({
        message: 'An error occurred while trying to get user data.',
      });
    }
  },
);
