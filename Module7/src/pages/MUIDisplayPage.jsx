import {
  BasicGrid,
  BasicUsage,
  CustomCard,
  MUIDialog,
  MUIForm,
  SxExample,
} from "../Components";

export default function MUIDisplayPage() {
  // Save in pages/AboutPage.jsx
  return (
    <div className="MUIDisplayPage">
      <h1>MUIDisplayPage</h1>
      <CustomCard title="Iguana">Green Lizard Card</CustomCard>
      <BasicGrid></BasicGrid>
      <MUIForm></MUIForm>
      <MUIDialog text="My first MUI Dialog"></MUIDialog>
      <SxExample></SxExample>
      <BasicUsage></BasicUsage>
    </div>
  );
}
