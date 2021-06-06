import React from "react";
import ProductsList from "../pages/ProductsList";
import Categories from "./Categories";
import { Grid } from 'semantic-ui-react'

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories/>
          </Grid.Column>
          <Grid.Column width={12}>
            <ProductsList/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
