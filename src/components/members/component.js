import * as React from 'react';
import members from 'Data/members';
import Member from 'Components/member/component'
import { Grid } from '@mui/material';

export default function Members() {
    const memberComponents = members.map(
        member => <Grid item xs={3} key={member.id}><Member
                    name={member.name}
                    github={member.github}
                    webpage={member.webpage}
                  >
                  </Member></Grid>
        )

    return <Grid container spacing={2}>
        {memberComponents}
      </Grid>
}