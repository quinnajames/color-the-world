export class SettingsService {
  // https://stackoverflow.com/questions/34815478/access-key-data-across-entire-app-in-angular-2-ionic-2
  static instance: SettingsService;
  static isCreating: Boolean = false;

  private gallerySize: number;

  constructor() {
    if (!SettingsService.isCreating) {
      throw new Error("Don't instantiate this singleton class with 'new.' Use 'getInstance'.");
    }
  }

  static getInstance() : SettingsService {
    if (SettingsService.instance == null)
    {
      SettingsService.isCreating = true;
      SettingsService.instance = new SettingsService();
      SettingsService.isCreating = false;
    }
    return SettingsService.instance;
  }
  getGallerySize() : number {
    return this.gallerySize || 5;
  }
  setGallerySize(val) : void {
    this.gallerySize = val;
  }
}
