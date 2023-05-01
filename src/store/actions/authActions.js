import { createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk(
  'auth/login',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        return data;
      }
      return rejectWithValue(data);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

// export const signup = createAsyncThunk(
//   'auth/signup',
//   async (payload, { rejectWithValue }) => {
//     try {
//       const response = await fetch(`${import.meta.env.VITE_API_URL}/register`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });

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

export const signup = createAsyncThunk(
  'auth/signup',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await new Promise((resolve, reject) => {
        // Simulando una respuesta asincrónica después de un breve retraso de 1 segundo
        setTimeout(() => {
          // Simulando una respuesta de error
          if (payload.email === 'test@example.com') {
            resolve({
              ok: false,
              json: () =>
                Promise.resolve({
                  message: 'Ya existe una cuenta registrada con este email.',
                }),
            });
          } else if (payload.username === 'testuser') {
            resolve({
              ok: false,
              json: () =>
                Promise.resolve({ message: 'Ya existe este username' }),
            });
          } else {
            resolve({
              ok: true,
              json: () =>
                Promise.resolve({
                  message: 'Usuario registrado correctamente.',
                }),
            });
          }
        }, 5000);
      });

      const data = await response.json();

      if (response.ok) {
        return data;
      }

      return rejectWithValue(data);
    } catch (err) {
      // Simulando una respuesta de error
      return rejectWithValue({
        message: 'Ha ocurrido un error al intentar registrarse.',
      });
    }
  },
);
