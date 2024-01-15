import React from 'react';
import { ScrollView } from 'react-native';
import { PricingCard, lightColors } from '@rneui/themed';

type PricingCardComponentProps = {};

const Pricing: React.FunctionComponent<PricingCardComponentProps> = () => {
return (
  <>
    <ScrollView>
      <PricingCard
        color={lightColors.primary}
        title="Free"
        price="$0"
        info={['Economy', 'No included Food', 'All Core Features']}
        button={{ title: ' GET STARTED', icon: 'flight-takeoff' }}
      />
      <PricingCard
        color={lightColors.secondary}
        title="Starter"
        price="$19"
        info={['Buissness', '$10 Food Voucher', 'All Core Features']}
        button={{ title: ' GET STARTED', icon: 'flight-takeoff' }}
      />
      <PricingCard
        color={lightColors.secondary}
        title="Enterprise"
        price="$49"
        info={['First Class', 'Unlimted Food and Drink', 'All Core Features']}
        button={{ title: ' GET STARTED', icon: 'flight-takeoff' }}
      />
    </ScrollView>
  </>
);
};

export default Pricing;