import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'innervoice',
  webDir: 'build',
  plugins: {
    Camera: {
      permissions: ["camera", "photos"]
    }
  }

};

export default config;
