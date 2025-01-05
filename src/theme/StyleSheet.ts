import { Breakpoints } from '@displaykit/responsive_styles';

//Generics
type ResponsiveProperty<Type> = Partial<Record<Breakpoints, Type>>;

//It was moved to make StyleSheet a generic value/property
export interface StyleSheet {
  fontFamily?: ResponsiveProperty<string> | string;
  backgroundColor?: ResponsiveProperty<string> | string;
  [key: string] : any; // any key/value pair can be passed
}
