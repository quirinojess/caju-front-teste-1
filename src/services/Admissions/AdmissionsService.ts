import api from '~/config/Api/ApiConfig';
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
    throw new Error('Falha ao carregar os registros. Por favor, tente mais tarde.');
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
    throw new Error('Falha ao adicionar um novo registro. Por favor, tente novamente.');
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
    throw new Error('Falha na requisição. Por favor, tente novamente.');
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
    throw new Error('Falha na requisição. Por favor, tente novamente.');
  }
}


 const AdmissionsService = {
  getAdmissions,
  postAdmission,
  updateAdmissions,
  deleteAdmission,
};

export default AdmissionsService;