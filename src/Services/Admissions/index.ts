import api from '~/Config/Api';
import { TAdmission } from '~/types/TAdmissions';

async function getAdmissions(filterBy?: string, query?: string) {
  try {
    const endpoint = query
      ? `/registrations/?${filterBy}=${query}`
      : `/registrations`;
    const { data } = await api.get(endpoint, {
      headers: {
        'login-mode': false,
      },
    });

    return data;
  } catch (error) {
    return console.log('error', error);
  }
}

async function postAdmission(body: TAdmission) {
  try {
    const { data } = await api.post(`/registrations`, body, {
      headers: {
        'login-mode': false,
      },
    });

    return data;
  } catch (error) {
    return error;
  }
}

async function updateAdmissions(body: TAdmission, userId: string) {
  try {
    const { data } = await api.put(`/registrations/${userId}`, body, {
      headers: {
        'login-mode': false,
      },
    });

    return data;
  } catch (error) {
    return error;
  }
}

async function deleteAdmission(userId: string) {
  try {
    const { data } = await api.delete(`/registrations/${userId}`, {
      headers: {
        'login-mode': false,
      },
    });

    return data;
  } catch (error) {
    return error;
  }
}

export const admissionsService = {
  getAdmissions,
  postAdmission,
  updateAdmissions,
  deleteAdmission,
};
