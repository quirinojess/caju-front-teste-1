import { Columns, SearchBar } from '~/components/Dashboard';
import * as S from './styled';

const DashboardPage = () => {
  return (
    <S.Container>
      <SearchBar />
      <Columns registrations={[]} />
    </S.Container>
  );
};
export default DashboardPage;
