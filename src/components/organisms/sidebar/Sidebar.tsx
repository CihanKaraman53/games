import  { FC } from 'react';
import styled from 'styled-components';
import { useForm, Controller } from "react-hook-form";
import Checkbox from "../../atoms/checkbox/Checkbox";
import Collapsible from "../../molecules/collapsible/Collapsible";
import { genres } from "../../../data/genre";
import { Col, Row } from 'react-grid-system';
import { states } from "../../../data/state";
import { useDispatch } from 'react-redux';
import { setSelectedFields } from '../../../store/gameActions';
import { breakPoints } from '../../../common/theme';

const Wrapper = styled.aside`
  background-color: ${({theme}) => theme.palette.common.darkGray};
  padding: 40px 30px;

  @media (max-width: ${breakPoints.tablet}) {
    padding: 15px 16px;
  }
`;

interface SidebarProps {}

const StyledRow = styled(Row)`
  margin: 12px 0;
`

export interface IFormFields{
  genre: {
    [K in GenreType]: boolean;
  };
  state: {
    [K in StateType]: boolean;
  };
}

const SideBar: FC<SidebarProps> = () => {
  const { control, watch } = useForm<IFormFields>();
  const dispatch = useDispatch();

  const handleChange = () => {
    const fields = watch();
    const genreTuples = Object.entries(fields.genre).filter((item) => item[1]) as [GenreType, boolean][];
    const stateTuples = Object.entries(fields.state).filter((item) => item[1]) as [StateType, boolean][];
    dispatch(setSelectedFields({genres: genreTuples, states: stateTuples}))
  }
  

  return (
    <Wrapper>
      <Collapsible text='State' isActive>
        <StyledRow>
          {states.map((state) => (
            <Controller
                control={control} 
                key={state.value}
                name={`state.${state.value}`}
                defaultValue={false}
                render={({ field: { onChange, value } }) => (
                  <Col xs={6} lg={12}>
                    <div style={{margin: '5px 0'}}>
                      <Checkbox 
                        name={`state.${state.value}`}
                        value={value} 
                        onChange={(event) => {
                          onChange(event);
                          handleChange();
                        }}
                        label={state.label} 
                      />
                    </div>
                  </Col>
                )} 
            />
          ))}
        </StyledRow>
      </Collapsible>
      <Collapsible text='Genre Filters' isActive>
        <Row>
          {genres.map((genre) => (
            <Controller
              control={control} 
              key={genre.value}
              name={`genre.${genre.value}`}
              defaultValue={false}
              render={({ field: { onChange, value } }) => (
                  <Col xs={6} lg={12}>
                    <div style={{margin: '5px 0'}}>
                      <Checkbox 
                        name={`genre.${genre.value}`}
                        value={value} 
                        onChange={(event) => {
                          onChange(event);
                          handleChange();
                        }}
                        label={genre.label}
                      />
                    </div>
                  </Col>
              )} 
            />
          ))}
        </Row>
      </Collapsible>
    </Wrapper>
  )
}

export default SideBar;
