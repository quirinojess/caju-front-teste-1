import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import TextField from '~/components/TextField';
import * as S from './styled.ts';
import Button from '~/components/Buttons';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import Icons from '~/components/Icons';
import routes from '~/router/routes';
import { TAdmission } from '~/types/TAdmissions/index.ts';
import { admissionsService } from '~/services/Admissions/index.ts';
import { cpfMask, isValidCpf } from '~/utils/cpfHelpers/index.tsx';
import { emailRegex, nameRegex } from '~/utils/regexToValidation/index.tsx';
import { Loading } from '~/components';
import { toast } from 'react-toastify';

const NewUserPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TAdmission>();
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<TAdmission> = async (data) => {
    setLoading(true);

    const result = await admissionsService.postAdmission({
      ...data,
      status: 'REVIEW',
    });

    if (result) {
      setLoading(false);
      toast.success('Usuário cadastrado com sucesso');
      setTimeout(() => {
        navigate(routes.dashboard);
      }, 5000);
    }
  };

  return (
    <S.Container>
      {loading && <Loading />}
      <Icons onClick={() => navigate(routes.dashboard)} aria-label="back">
        <HiOutlineArrowLeft size={24} />
      </Icons>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="employeeName"
          control={control}
          defaultValue=""
          rules={{
            required: 'Nome é obrigatório',
            pattern: {
              value: nameRegex,
              message:
                'Nome Inválido, deve conter ao menos 2 caracteres e um espaço',
            },
          }}
          render={({ field }) => (
            <TextField
              placeholder="Nome"
              label="Nome"
              {...field}
              error={errors.employeeName?.message}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: 'Email é obrigatório',
            pattern: {
              value: emailRegex,
              message: 'Email inválido',
            },
          }}
          render={({ field }) => (
            <TextField
              placeholder="Email"
              label="Email"
              type="email"
              {...field}
              error={errors.email?.message}
            />
          )}
        />
        <Controller
          name="cpf"
          control={control}
          defaultValue=""
          rules={{
            required: 'CPF é obrigatório',
            validate: {
              isValidCpf: (v) => isValidCpf(v) || 'CPF inválido',
            },
          }}
          render={({ field }) => (
            <TextField
              placeholder="CPF"
              label="CPF"
              value={cpfMask(field.value || '')}
              onChange={(e) => field.onChange(e.target.value)}
              error={errors.cpf?.message}
            />
          )}
        />
        <Controller
          name="admissionDate"
          control={control}
          defaultValue=""
          rules={{ required: 'Data de admissão é obrigatória' }}
          render={({ field }) => (
            <TextField
              label="Data de admissão"
              type="date"
              {...field}
              error={errors.admissionDate?.message}
            />
          )}
        />
        <Button type="submit">Cadastrar</Button>
      </S.Form>
    </S.Container>
  );
};

export default NewUserPage;
