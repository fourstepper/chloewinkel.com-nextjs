import { Container } from "../../components/Components";

export default function StudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container>{children}</Container>;
}
