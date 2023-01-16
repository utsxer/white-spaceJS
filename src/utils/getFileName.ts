export default function getFileName(path): string {
  return path.split('/').pop().split('\\').pop().split('.')[0];
}
