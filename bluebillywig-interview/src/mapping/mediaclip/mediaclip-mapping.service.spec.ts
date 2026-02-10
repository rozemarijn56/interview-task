import { MediaclipMappingService } from './mediaclip-mapping.service';

describe('MediaclipMappingService(CSV)', () => {
    let service: MediaclipMappingService;

    beforeEach(() => {
        service = new MediaclipMappingService();
    });

    it('returns mediaClipId when mapping exists', () => {
        const result = service.getMediaclipIdForPost(76);
        expect(result).toBe('3888497');
    });

    it('returns mediaClipId when mapping exists from middle of file', () => {
        const result = service.getMediaclipIdForPost(57);
        expect(result).toBe('3864492');
    });

    it('returns mediaClipId when mapping exists from end of file', () => {
        const result = service.getMediaclipIdForPost(20);
        expect(result).toBe('3792511');
    });

    it('returns null when no mapping exists', () => {
        const result = service.getMediaclipIdForPost(999);
        expect(result).toBeNull();
    });

    it('throws an error for invalid postId', () => {
        expect(() => service.getMediaclipIdForPost(0)).toThrow();
    })


});
