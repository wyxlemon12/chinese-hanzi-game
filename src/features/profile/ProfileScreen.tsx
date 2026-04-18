import type { LearnerProfile } from '../../domain/progress-store';
import { SectionCard } from '../../components/SectionCard';

interface ProfileScreenProps {
  learner: LearnerProfile;
  onOpenAdmin: () => void;
  onResetProgress: () => void;
}

export function ProfileScreen({ learner, onOpenAdmin, onResetProgress }: ProfileScreenProps) {
  return (
    <div className="space-y-4">
      <SectionCard eyebrow="我的" title="学习档案">
        <div className="space-y-3 text-sm text-slate-600">
          <p>
            当前年龄段：<strong className="text-slate-900">{learner.ageBand}</strong>
          </p>
          <p>
            匿名档案号：<strong className="text-slate-900">{learner.deviceKey}</strong>
          </p>
        </div>
      </SectionCard>

      <SectionCard eyebrow="管理" title="内容与数据">
        <div className="space-y-3">
          <button
            className="w-full rounded-[1.3rem] bg-slate-900 px-4 py-3 text-left text-sm font-bold text-white"
            onClick={onOpenAdmin}
            type="button"
          >
            打开内容后台
          </button>
          <button
            className="w-full rounded-[1.3rem] border border-rose-200 bg-rose-50 px-4 py-3 text-left text-sm font-bold text-rose-700"
            onClick={onResetProgress}
            type="button"
          >
            清空本地学习进度
          </button>
        </div>
      </SectionCard>
    </div>
  );
}
