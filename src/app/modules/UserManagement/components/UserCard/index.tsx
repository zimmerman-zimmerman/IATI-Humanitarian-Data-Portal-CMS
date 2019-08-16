import React from 'react';

/* models */
import { UserCardModel } from './models';

/* components */
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { Typography } from '@material-ui/core';

/* icons */
import AccountCircle from '@material-ui/icons/AccountCircle';
import styled from 'styled-components';

const StyledContent = styled(CardContent)`
  && {
    display: flex;
  }
`;

const StyledButtonGrid = styled(Grid)`
  && {
    display: flex;
  }
`;

const StyledName = styled(Typography)`
  && {
    height: fit-content;
    margin: 0 auto 0 20px;
    font-weight: bold;
    font-size: 30px;
  }
`;

export const UserCard = (props: UserCardModel) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
      <Card>
        <StyledContent>
          <AccountCircle color="disabled" style={{ fontSize: 50 }} />
          <StyledName variant="h5" component="h2">
            {props.name}
          </StyledName>
        </StyledContent>
        <CardActions>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={1}
          >
            <StyledButtonGrid item xs={6}>
              <ContainedButton
                backgroundColor="#ff6961"
                margin="0 auto 0 8px"
                text="Delete"
                onClick={() => props.onDelete()}
              />
            </StyledButtonGrid>
            <StyledButtonGrid item xs={6}>
              <ContainedButton
                margin="0 8px 0 auto"
                text="Edit"
                onClick={() => props.onEdit()}
              />
            </StyledButtonGrid>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
};
